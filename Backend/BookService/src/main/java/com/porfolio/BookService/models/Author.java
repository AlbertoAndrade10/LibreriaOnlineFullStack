package com.porfolio.BookService.models;

import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
public class Author {

    private Long id;
    private String authorName;
}
