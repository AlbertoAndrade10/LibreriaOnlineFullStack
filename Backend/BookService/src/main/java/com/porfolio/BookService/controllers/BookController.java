package com.porfolio.BookService.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.porfolio.BookService.dtos.BookCreateDTO;
import com.porfolio.BookService.dtos.BookDTO;
import com.porfolio.BookService.dtos.BookUpdateDTO;
import com.porfolio.BookService.services.BookService.IBookService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/books")
@CrossOrigin(origins = "http://localhost:4200")
public class BookController {

    @Autowired
    private IBookService bookService;

    @GetMapping
    public ResponseEntity<List<BookDTO>> getAllBooks() {
        List<BookDTO> books = bookService.getAllBooks();
        return ResponseEntity.ok(books);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BookDTO> getBookById(@PathVariable Long id) {
        BookDTO book = bookService.getBookById(id);
        return ResponseEntity.ok(book);
    }

    @PostMapping
    public ResponseEntity<BookDTO> createBook(@Valid @RequestBody BookCreateDTO bookCreateDTO) {
        BookDTO createdBook = bookService.createBook(bookCreateDTO);
        return new ResponseEntity<>(createdBook, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<BookDTO> updateBook(@PathVariable Long id,
            @Valid @RequestBody BookUpdateDTO bookUpdateDTO) {
        BookDTO updatedBook = bookService.updateBook(id, bookUpdateDTO);
        return ResponseEntity.ok(updatedBook);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/author/{authorId}")
    public ResponseEntity<List<BookDTO>> getBooksByAuthor(@PathVariable Long authorId) {
        List<BookDTO> books = bookService.getBooksByAuthor(authorId);
        return ResponseEntity.ok(books);
    }

    @GetMapping("/genre/{genreId}")
    public ResponseEntity<List<BookDTO>> getBooksByGenre(@PathVariable Long genreId) {
        List<BookDTO> books = bookService.getBooksByGenre(genreId);
        return ResponseEntity.ok(books);
    }
}
