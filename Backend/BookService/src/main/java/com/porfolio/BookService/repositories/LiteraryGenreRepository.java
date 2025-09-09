package com.porfolio.BookService.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.porfolio.BookService.models.LiteraryGenre;

public interface LiteraryGenreRepository extends JpaRepository<LiteraryGenre, Long> {

}
