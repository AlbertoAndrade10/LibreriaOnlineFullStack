package com.porfolio.BookService.models;

import java.math.BigDecimal;

import jakarta.persistence.Entity;
import lombok.Data;

@Entity
@Data
public class Book {

    private Long id;
    private String bookName;
    private Author author;
    private LiteraryGenre literaryGenre;
    private String urlImage;
    private BigDecimal price;
    private String description;
    private Integer stock;

}
