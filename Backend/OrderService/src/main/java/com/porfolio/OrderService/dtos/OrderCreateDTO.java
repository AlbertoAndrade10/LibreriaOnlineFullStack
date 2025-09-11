package com.porfolio.OrderService.dtos;

import java.util.List;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class OrderCreateDTO {

    @NotNull(message = "User ID is required")
    private Long userId;

    @NotEmpty(message = "Order items are required")
    private List<OrderItemCreateDTO> items;

    @NotNull(message = "Shipping address is required")
    private String shippingAddress;

    private String billingAddress;
}
