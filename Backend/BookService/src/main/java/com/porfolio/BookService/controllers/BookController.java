package com.porfolio.BookService.controllers;

import java.io.IOException;
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
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.porfolio.BookService.dtos.BookCreateDTO;
import com.porfolio.BookService.dtos.BookDTO;
import com.porfolio.BookService.dtos.BookUpdateDTO;
import com.porfolio.BookService.services.BookService.IBookService;
import com.porfolio.BookService.services.CloudinaryService.ICloudinaryService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/books")
@CrossOrigin(origins = "http://localhost:4200")
public class BookController {

    @Autowired
    private IBookService bookService;

    @Autowired
    private ICloudinaryService cloudinaryService;

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
    public ResponseEntity<BookDTO> createBook(
            @RequestParam("book") String bookJson,
            @RequestParam("image") MultipartFile image) {
        try {
            // Validar que la imagen sea obligatoria
            if (image == null || image.isEmpty()) {
                return ResponseEntity.badRequest()
                        .body(null);
            }

            // Convertir JSON string a objeto
            ObjectMapper objectMapper = new ObjectMapper();
            BookCreateDTO bookCreateDTO = objectMapper.readValue(bookJson, BookCreateDTO.class);

            // Upload de imagen a Cloudinary
            String imageUrl = cloudinaryService.uploadImage(image);
            bookCreateDTO.setUrlImage(imageUrl);

            // Crear el libro con la URL de la imagen
            BookDTO createdBook = bookService.createBook(bookCreateDTO);
            return new ResponseEntity<>(createdBook, HttpStatus.CREATED);
        } catch (IOException e) {
            return ResponseEntity.badRequest()
                    .body(null);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<BookDTO> updateBook(
            @PathVariable Long id,
            @RequestPart("book") @Valid BookUpdateDTO bookUpdateDTO,
            @RequestPart(value = "image", required = false) MultipartFile image) {

        try {
            //-->> if a new image is provided, upload it
            if (image != null && !image.isEmpty()) {
                String imageUrl = cloudinaryService.uploadImage(image);
                bookUpdateDTO.setUrlImage(imageUrl);
            }

            BookDTO updatedBook = bookService.updateBook(id, bookUpdateDTO);
            return ResponseEntity.ok(updatedBook);
        } catch (IOException e) {
            return ResponseEntity.badRequest().build();
        }

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
