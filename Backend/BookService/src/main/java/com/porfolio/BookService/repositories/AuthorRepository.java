package com.porfolio.BookService.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.porfolio.BookService.models.Author;

public interface AuthorRepository extends JpaRepository<Long, Author> {

}
