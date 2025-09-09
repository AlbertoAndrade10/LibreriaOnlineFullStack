package com.porfolio.BookService.services.AuthorService;

import java.util.List;

import com.porfolio.BookService.dtos.AuthorDTO;

public interface IAuthorService {

    List<AuthorDTO> getAllAuthors();

    AuthorDTO getAuthorById(Long id);

    AuthorDTO createAuthor(String authorName);

    AuthorDTO updateAuthor(Long id, String authorName);

    void deleteAuthor(Long id);

}
