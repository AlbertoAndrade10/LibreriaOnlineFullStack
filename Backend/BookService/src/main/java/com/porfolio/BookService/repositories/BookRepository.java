package com.porfolio.BookService.repositories;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.porfolio.BookService.models.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

    List<Book> findByAuthorId(Long authorId);

    List<Book> findByLiteraryGenreId(Long genreId);

    List<Book> findByBookNameContainingIgnoreCase(String bookName);

    List<Book> findByStockGreaterThan(Integer stock);

    @Query("SELECT b FROM Book b WHERE b.price BETWEEN :minPrice AND :maxPrice")
    List<Book> findByPriceRange(@Param("minPrice") BigDecimal minPrice,
            @Param("maxPrice") BigDecimal maxPrice);

}
