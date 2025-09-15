package com.porfolio.BookService.dtos;

import java.math.BigDecimal;

import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Data;

@Data
public class BookUpdateDTO {

    private String bookName;
    private Long authorId;
    private Long literaryGenreId;
    private String urlImage;

    @Positive(message = "The price must be greather than 0")
    private BigDecimal price;

    private String description;

    @PositiveOrZero(message = "The stock cannot be negative")
    private Integer stock;

    public void setUrlImage(String urlImage) {
        this.urlImage = urlImage;
    }
}
