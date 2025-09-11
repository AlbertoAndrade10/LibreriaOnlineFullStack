package com.porfolio.OrderService.dtos;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import com.porfolio.OrderService.models.OrderStatus;

import lombok.Data;

@Data
public class OrderDTO {

    private Long id;
    private String orderNumber;
    private Long userId;
    private OrderStatus status;
    private List<OrderItemDTO> items;
    private BigDecimal totalAmount;
    private String shippingAddress;
    private String billingAddress;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
