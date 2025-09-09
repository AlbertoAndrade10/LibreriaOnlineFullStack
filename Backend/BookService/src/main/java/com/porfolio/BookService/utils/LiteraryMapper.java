package com.porfolio.BookService.utils;

import org.springframework.stereotype.Component;

import com.porfolio.BookService.dtos.LiteraryGenreDTO;
import com.porfolio.BookService.models.LiteraryGenre;

@Component
public class LiteraryMapper {

    // -->> toDTO <<--
    public LiteraryGenreDTO toDTO(LiteraryGenre literaryGenre) {
        if (literaryGenre == null) {
            return null;
        }
        LiteraryGenreDTO dto = new LiteraryGenreDTO();

        dto.setId(literaryGenre.getId());
        dto.setLiteraryGenreName(literaryGenre.getLiteraryGenreName());

        return dto;
    }

    // -->> toEntity <<--
    public LiteraryGenre toEntity(LiteraryGenreDTO dto) {
        if (dto == null) {
            return null;
        }
        LiteraryGenre genre = new LiteraryGenre();

        genre.setId(dto.getId());
        genre.setLiteraryGenreName(dto.getLiteraryGenreName());

        return genre;
    }
}
