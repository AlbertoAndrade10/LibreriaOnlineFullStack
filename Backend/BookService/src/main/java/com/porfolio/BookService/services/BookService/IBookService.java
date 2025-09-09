package com.porfolio.BookService.services.BookService;

import java.util.List;

import com.porfolio.BookService.dtos.BookCreateDTO;
import com.porfolio.BookService.dtos.BookDTO;
import com.porfolio.BookService.dtos.BookUpdateDTO;

public interface IBookService {

    List<BookDTO> getAllBooks();

    BookDTO getBookById(Long id);

    BookDTO createBook(BookCreateDTO bookCreateDTO);

    BookDTO updateBook(Long id, BookUpdateDTO bookUpdateDTO);

    void deleteBook(Long id);

    List<BookDTO> getBooksByAuthor(Long authorId);

    List<BookDTO> getBooksByGenre(Long genreId);
}
