package com.porfolio.BookService.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.porfolio.BookService.models.LiteraryGenre;

public interface LiteraryGenreRepository extends JpaRepository<LiteraryGenre, Long> {

    Optional<LiteraryGenre> findByLiteraryGenreName(String genreName);
}
