package com.porfolio.BookService.dtos;

import java.math.BigDecimal;

import lombok.Data;

@Data
public class BookDTO {

    private Long id;
    private String bookName;
    private AuthorDTO author;
    private LiteraryGenreDTO literaryGenre;
    private String urlImage;
    private BigDecimal price;
    private String description;
    private Integer stock;
}
