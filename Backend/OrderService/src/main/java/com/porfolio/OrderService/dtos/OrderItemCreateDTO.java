package com.porfolio.OrderService.dtos;

import java.math.BigDecimal;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class OrderItemCreateDTO {

    @NotNull(message = "Book ID is required")
    private Long bookId;

    @NotNull(message = "Book title is required")
    private String bookTitle;

    @NotNull(message = "Quantity is required")
    @Min(value = 1, message = "Quantity must be at least 1")
    private Integer quantity;

    @NotNull(message = "Unit price is required")
    private BigDecimal unitPrice;

    private Integer stock;
}
