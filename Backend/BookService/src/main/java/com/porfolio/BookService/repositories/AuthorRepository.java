package com.porfolio.BookService.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.porfolio.BookService.models.Author;

public interface AuthorRepository extends JpaRepository<Author, Long> {

    Optional<Author> findByAuthorName(String authorName);

    List<Author> findByAuthorNameContainingIgnoreCase(String authorName);

}
