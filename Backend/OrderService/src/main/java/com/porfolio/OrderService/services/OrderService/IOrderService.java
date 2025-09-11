package com.porfolio.OrderService.services.OrderService;

import java.util.List;

import com.porfolio.OrderService.dtos.OrderCreateDTO;
import com.porfolio.OrderService.dtos.OrderDTO;
import com.porfolio.OrderService.models.OrderStatus;

public interface IOrderService {

    OrderDTO createOrder(OrderCreateDTO orderCreateDTO);

    OrderDTO getOrderById(Long id);

    OrderDTO getOrderByOrderNumber(String orderNumber);

    List<OrderDTO> getOrdersByUserId(Long userId);

    List<OrderDTO> getOrdersByUserIdAndStatus(Long userId, OrderStatus status);

    List<OrderDTO> getAllOrders();

    List<OrderDTO> getOrdersByStatus(OrderStatus status);

    OrderDTO updateOrderStatus(Long id, OrderStatus status);

    void cancelOrder(Long id);

    void deleteOrder(Long id);
}
