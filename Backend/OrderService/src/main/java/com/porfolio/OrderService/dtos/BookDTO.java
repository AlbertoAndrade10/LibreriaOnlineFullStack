package com.porfolio.OrderService.dtos;

import java.math.BigDecimal;

import lombok.Data;

@Data
public class BookDTO {

    private Long id;
    private String bookName;
    private BigDecimal price;
    private String description;
    private Integer stock;
}
