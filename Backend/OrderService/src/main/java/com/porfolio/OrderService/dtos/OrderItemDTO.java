package com.porfolio.OrderService.dtos;

import java.math.BigDecimal;

import lombok.Data;

@Data
public class OrderItemDTO {

    private Long bookId;
    private String bookTitle;
    private Integer quantity;
    private BigDecimal unitPrice;
    private BigDecimal totalPrice;
}
