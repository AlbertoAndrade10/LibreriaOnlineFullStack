package com.porfolio.BookService.dtos;

import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class BookCreateDTO {

    @NotBlank(message = "The book name cannot be empty")
    private String bookName;

    @NotNull(message = "The author is mandatory")
    private Long authorId;

    @NotNull(message = "The literary genre is mandatory")
    private Long literaryGenreId;

    private String urlImage;

    @NotNull(message = " The price is mandatory")
    @Positive(message = "The price must be greather than 0")
    private BigDecimal price;

    private String description;

    @NotNull(message = "The stock is mandatory")
    @PositiveOrZero(message = "The stock cannot be negative")
    private Integer stock;

    public void setUrlImage(String urlImage) {
        this.urlImage = urlImage;
    }
}
