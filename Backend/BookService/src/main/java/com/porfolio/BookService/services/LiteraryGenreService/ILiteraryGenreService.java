package com.porfolio.BookService.services.LiteraryGenreService;

import java.util.List;

import com.porfolio.BookService.dtos.LiteraryGenreDTO;

public interface ILiteraryGenreService {

    List<LiteraryGenreDTO> getAllGenres();

    LiteraryGenreDTO getGenreById(Long id);

    LiteraryGenreDTO createGenre(String genreName);

    LiteraryGenreDTO updateGenre(Long id, String genreName);

    void deleteGenre(Long id);
}
