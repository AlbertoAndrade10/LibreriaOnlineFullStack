package com.porfolio.BookService.services.BookService;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.porfolio.BookService.dtos.BookCreateDTO;
import com.porfolio.BookService.dtos.BookDTO;
import com.porfolio.BookService.dtos.BookUpdateDTO;
import com.porfolio.BookService.exceptions.ResourceNotFoundException;
import com.porfolio.BookService.models.Author;
import com.porfolio.BookService.models.Book;
import com.porfolio.BookService.models.LiteraryGenre;
import com.porfolio.BookService.repositories.AuthorRepository;
import com.porfolio.BookService.repositories.BookRepository;
import com.porfolio.BookService.repositories.LiteraryGenreRepository;
import com.porfolio.BookService.utils.BookMapper;

@Service
@Transactional
public class BookServiceImpl implements IBookService {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private AuthorRepository authorRepository;

    @Autowired
    private LiteraryGenreRepository literaryGenreRepository;

    @Autowired
    private BookMapper mapper;

    @Override
    @Transactional(readOnly = true)
    public List<BookDTO> getAllBooks() {
        return bookRepository.findAll().stream()
                .map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public BookDTO getBookById(Long id) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Book", id));

        return mapper.toDTO(book);
    }

    @Override
    public BookDTO createBook(BookCreateDTO bookCreateDTO) {
        Author author = authorRepository.findById(bookCreateDTO.getAuthorId())
                .orElseThrow(() -> new ResourceNotFoundException("Autor", bookCreateDTO.getAuthorId()));

        LiteraryGenre genre = literaryGenreRepository.findById(bookCreateDTO.getLiteraryGenreId())
                .orElseThrow(() -> new ResourceNotFoundException("Literary genre", bookCreateDTO.getLiteraryGenreId()));

        Book book = new Book();
        book.setBookName(bookCreateDTO.getBookName());
        book.setAuthor(author);
        book.setLiteraryGenre(genre);
        book.setUrlImage(bookCreateDTO.getUrlImage());
        book.setPrice(bookCreateDTO.getPrice());
        book.setDescription(bookCreateDTO.getDescription());
        book.setStock(bookCreateDTO.getStock());

        Book savedBook = bookRepository.save(book);

        return mapper.toDTO(savedBook);
    }

    @Override
    public BookDTO updateBook(Long id, BookUpdateDTO bookUpdateDTO) {

        Book existingBook = bookRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Book", id));

        Optional.ofNullable(bookUpdateDTO.getBookName())
                .ifPresent(existingBook::setBookName);

        Optional.ofNullable(bookUpdateDTO.getAuthorId())
                .map(authorId -> authorRepository.findById(authorId)
                .orElseThrow(() -> new ResourceNotFoundException("Author", authorId)))
                .ifPresent(existingBook::setAuthor);

        Optional.ofNullable(bookUpdateDTO.getLiteraryGenreId())
                .map(genreId -> literaryGenreRepository.findById(genreId)
                .orElseThrow(() -> new ResourceNotFoundException("Leterary genre", genreId)))
                .ifPresent(existingBook::setLiteraryGenre);

        Optional.ofNullable(bookUpdateDTO.getUrlImage())
                .ifPresent(existingBook::setUrlImage);

        Optional.ofNullable(bookUpdateDTO.getPrice())
                .ifPresent(existingBook::setPrice);

        Optional.ofNullable(bookUpdateDTO.getDescription())
                .ifPresent(existingBook::setDescription);

        Optional.ofNullable(bookUpdateDTO.getStock())
                .ifPresent(existingBook::setStock);

        Book updatedBook = bookRepository.save(existingBook);
        return mapper.toDTO(updatedBook);
    }

    @Override
    public void deleteBook(Long id) {
        if (!bookRepository.existsById(id)) {
            throw new ResourceNotFoundException("Book", id);
        }
        bookRepository.deleteById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<BookDTO> getBooksByAuthor(Long authorId) {

        if (!authorRepository.existsById(authorId)) {
            throw new ResourceNotFoundException("Author", authorId);
        }

        return bookRepository.findByAuthorId(authorId).stream()
                .map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<BookDTO> getBooksByGenre(Long genreId) {

        if (!literaryGenreRepository.existsById(genreId)) {
            throw new ResourceNotFoundException("Literary genre", genreId);
        }

        return bookRepository.findByLiteraryGenreId(genreId).stream()
                .map(mapper::toDTO)
                .collect(Collectors.toList());
    }

}
