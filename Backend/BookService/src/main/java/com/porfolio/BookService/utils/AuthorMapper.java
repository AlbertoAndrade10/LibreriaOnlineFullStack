package com.porfolio.BookService.utils;

import org.springframework.stereotype.Component;

import com.porfolio.BookService.dtos.AuthorDTO;
import com.porfolio.BookService.models.Author;

@Component
public class AuthorMapper {

    // -->> toDTO <<--
    public AuthorDTO toDTO(Author author) {

        if (author == null) {
            return null;
        }
        AuthorDTO dto = new AuthorDTO();
        dto.setId(author.getId());
        dto.setAuthorName(author.getAuthorName());

        return dto;
    }

    // -->> toEntity <<--
    public Author toEntity(AuthorDTO dto) {

        if (dto == null) {
            return null;
        }

        Author author = new Author();
        author.setId(dto.getId());
        author.setAuthorName(dto.getAuthorName());

        return author;
    }

}
