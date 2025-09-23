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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.porfolio.BookService.dtos.AuthorDTO;
import com.porfolio.BookService.services.AuthorService.IAuthorService;

@RestController
@RequestMapping("/api/v1/authors")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthorController {

    @Autowired
    private IAuthorService authorService;

    @GetMapping
    public ResponseEntity<List<AuthorDTO>> getAllAuthors() {
        List<AuthorDTO> authors = authorService.getAllAuthors();
        return ResponseEntity.ok(authors);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AuthorDTO> getAuthorById(@PathVariable Long id) {
        AuthorDTO author = authorService.getAuthorById(id);
        return ResponseEntity.ok(author);
    }

    @PostMapping
    public ResponseEntity<AuthorDTO> createAuthor(@RequestParam String authorName) {
        if (authorName == null || authorName.trim().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }

        AuthorDTO createdAuthor = authorService.createAuthor(authorName.trim());
        return new ResponseEntity<>(createdAuthor, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AuthorDTO> updateAuthor(@PathVariable Long id,
            @RequestParam String authorName) {
        if (authorName == null || authorName.trim().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }

        AuthorDTO updatedAuthor = authorService.updateAuthor(id, authorName.trim());
        return ResponseEntity.ok(updatedAuthor);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAuthor(@PathVariable Long id) {
        authorService.deleteAuthor(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/health-AuthorController")
    public String health() {
        return "Health check AuthorController";
    }
}
