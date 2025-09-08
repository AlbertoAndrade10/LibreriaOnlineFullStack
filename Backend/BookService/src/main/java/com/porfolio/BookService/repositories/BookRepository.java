package com.porfolio.BookService.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.porfolio.BookService.models.Book;

public interface BookRepository extends JpaRepository<Long, Book> {

}
