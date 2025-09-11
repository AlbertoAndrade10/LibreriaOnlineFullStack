package com.porfolio.OrderService.utils.mappers;

import org.springframework.stereotype.Component;

import com.porfolio.OrderService.dtos.OrderDTO;
import com.porfolio.OrderService.dtos.OrderItemDTO;
import com.porfolio.OrderService.models.Order;
import com.porfolio.OrderService.models.OrderItem;

@Component
public class OrderMapper {

    public OrderDTO toDTO(Order order) {
        OrderDTO dto = new OrderDTO();
        dto.setId(order.getId());
        dto.setOrderNumber(order.getOrderNumber());
        dto.setUserId(order.getId());
        dto.setStatus(order.getStatus());
        dto.setTotalAmount(order.getTotalAmount());
        dto.setShippingAddress(order.getShippingAddress());
        dto.setBillingAddress(order.getBillingAddress());
        dto.setCreatedAt(order.getCreatedAt());
        dto.setUpdatedAt(order.getUpdatedAt());

        if (order.getItems() != null) {
            dto.setItems(order.getItems().stream()
                    .map(this::toItemDTO)
                    .collect(java.util.stream.Collectors.toList()));
        }

        return dto;
    }

    private OrderItemDTO toItemDTO(OrderItem item) {
        OrderItemDTO dto = new OrderItemDTO();
        dto.setBookId(item.getBookId());
        dto.setBookTitle(item.getBookTitle());
        dto.setQuantity(item.getQuantity());
        dto.setUnitPrice(item.getUnitPrice());
        dto.setTotalPrice(item.getTotalPrice());
        return dto;
    }
}
