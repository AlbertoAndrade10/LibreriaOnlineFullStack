package com.porfolio.BookService.dtos;

import lombok.Data;

@Data
public class AuthorDTO {

    private Long id;
    private String authorName;

    public Long getId() {
        return this.id;
    }

    public String getAuthorName() {
        return this.authorName;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }
}
