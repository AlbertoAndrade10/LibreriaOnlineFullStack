package com.porfolio.OrderService.services.OrderService;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.porfolio.OrderService.clients.BookServiceClient;
import com.porfolio.OrderService.dtos.BookDTO;
import com.porfolio.OrderService.dtos.OrderCreateDTO;
import com.porfolio.OrderService.dtos.OrderDTO;
import com.porfolio.OrderService.exceptions.BadRequestException;
import com.porfolio.OrderService.exceptions.InsufficientStockException;
import com.porfolio.OrderService.exceptions.ResourceNotFoundException;
import com.porfolio.OrderService.models.Order;
import com.porfolio.OrderService.models.OrderItem;
import com.porfolio.OrderService.models.OrderStatus;
import com.porfolio.OrderService.repositories.OrderRepository;
import com.porfolio.OrderService.utils.mappers.OrderMapper;

@Service
@Transactional
public class OrderServiceImpl implements IOrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private BookServiceClient bookServiceClient;

    @Autowired
    private OrderMapper orderMapper;

    @Override
    public OrderDTO createOrder(OrderCreateDTO orderCreateDTO) {
        validateBookStock(orderCreateDTO);

        Order order = new Order();
        order.setId(orderCreateDTO.getUserId());
        order.setShippingAddress(orderCreateDTO.getShippingAddress());
        order.setBillingAddress(orderCreateDTO.getBillingAddress());

        //create list of items
        for (var itemDTO : orderCreateDTO.getItems()) {

            OrderItem item = new OrderItem();
            item.setBookId(itemDTO.getBookId());
            item.setBookTitle(itemDTO.getBookTitle());
            item.setQuantity(itemDTO.getQuantity());
            item.setUnitPrice(itemDTO.getUnitPrice());
            item.calculateTotal();

            order.addItem(item);
        }
        order.calculateTotalAmount();

        Order savedOrder = orderRepository.save(order);

        return orderMapper.toDTO(savedOrder);

    }

    @Override
    @Transactional(readOnly = true)
    public OrderDTO getOrderById(Long id) {

        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Order", id));

        return orderMapper.toDTO(order);
    }

    @Override
    @Transactional(readOnly = true)
    public OrderDTO getOrderByOrderNumber(String orderNumber) {

        Order order = orderRepository.findByOrderNumber(orderNumber)
                .orElseThrow(() -> new ResourceNotFoundException("Order", orderNumber));

        return orderMapper.toDTO(order);
    }

    @Override
    @Transactional(readOnly = true)
    public List<OrderDTO> getOrdersByUserId(Long userId) {

        return orderRepository.findByUserId(userId).stream()
                .map(orderMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<OrderDTO> getOrdersByUserIdAndStatus(Long userId, OrderStatus status) {

        return orderRepository.findByUserIdAndStatus(userId, status).stream()
                .map(orderMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<OrderDTO> getAllOrders() {

        return orderRepository.findAll().stream()
                .map(orderMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<OrderDTO> getOrdersByStatus(OrderStatus status) {
        return orderRepository.findByStatus(status).stream()
                .map(orderMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public OrderDTO updateOrderStatus(Long id, OrderStatus status) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Order", id));

        order.setStatus(status);
        Order updatedOrder = orderRepository.save(order);
        return orderMapper.toDTO(updatedOrder);
    }

    @Override
    public void cancelOrder(Long id) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Order", id));

        if (order.getStatus() == OrderStatus.SHIPPED || order.getStatus() == OrderStatus.DELIVERED) {
            throw new BadRequestException("Cannot cancel order that has been shipped or delivered");
        }

        order.setStatus(OrderStatus.CANCELLED);
        orderRepository.save(order);
    }

    @Override
    public void deleteOrder(Long id) {
        if (!orderRepository.existsById(id)) {
            throw new ResourceNotFoundException("Order", id);
        }
        orderRepository.deleteById(id);
    }

    @SuppressWarnings("UseSpecificCatch")
    private void validateBookStock(OrderCreateDTO orderCreateDTO) {
        for (var item : orderCreateDTO.getItems()) {
            try {
                BookDTO book = bookServiceClient.getBookById(item.getBookId());
                if (book.getStock() < item.getQuantity()) {
                    throw new InsufficientStockException(
                            item.getBookId(),
                            item.getQuantity(),
                            item.getStock()
                    );
                }

            } catch (Exception e) {
                throw new ResourceNotFoundException("Book", item.getBookId());
            }
        }
    }

}
