package com.porfolio.BookService.utils;

import org.springframework.stereotype.Component;

import com.porfolio.BookService.dtos.AuthorDTO;
import com.porfolio.BookService.dtos.BookDTO;
import com.porfolio.BookService.dtos.LiteraryGenreDTO;
import com.porfolio.BookService.models.Author;
import com.porfolio.BookService.models.Book;
import com.porfolio.BookService.models.LiteraryGenre;

@Component
public class BookMapper {

    // -->> toDTO <<-- 
    public BookDTO toDTO(Book book) {

        BookDTO dto = new BookDTO();

        dto.setId(book.getId());
        dto.setBookName(book.getBookName());
        dto.setUrlImage(book.getUrlImage());
        dto.setPrice(book.getPrice());
        dto.setDescription(book.getDescription());
        dto.setStock(book.getStock());

        if (book.getAuthor() != null) {
            AuthorDTO authorDTO = new AuthorDTO();
            authorDTO.setId(book.getAuthor().getId());
            authorDTO.setAuthorName(book.getAuthor().getAuthorName());
            dto.setAuthor(authorDTO);
        }

        if (book.getLiteraryGenre() != null) {
            LiteraryGenreDTO genreDTO = new LiteraryGenreDTO();
            genreDTO.setId(book.getLiteraryGenre().getId());
            genreDTO.setLiteraryGenreName(book.getLiteraryGenre().getLiteraryGenreName());
            dto.setLiteraryGenre(genreDTO);
        }
        return dto;
    }

    // -->> toEntity <<-- 
    public Book toEntity(BookDTO dto) {

        Book book = new Book();

        book.setId(dto.getId());
        book.setBookName(dto.getBookName());
        book.setUrlImage(dto.getUrlImage());
        book.setPrice(dto.getPrice());
        book.setDescription(dto.getDescription());
        book.setStock(dto.getStock());

        if (dto.getAuthor() != null) {
            Author author = new Author();
            author.setId(dto.getAuthor().getId());
            author.setAuthorName(dto.getAuthor().getAuthorName());
            book.setAuthor(author);

        }

        if (dto.getLiteraryGenre() != null) {
            LiteraryGenre genre = new LiteraryGenre();

            genre.setId(dto.getLiteraryGenre().getId());
            genre.setLiteraryGenreName(dto.getLiteraryGenre().getLiteraryGenreName());
            book.setLiteraryGenre(genre);
        }

        return book;
    }

}
