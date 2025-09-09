package com.porfolio.BookService.services.LiteraryGenreService;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.porfolio.BookService.dtos.LiteraryGenreDTO;
import com.porfolio.BookService.exceptions.ResourceNotFoundException;
import com.porfolio.BookService.models.LiteraryGenre;
import com.porfolio.BookService.repositories.LiteraryGenreRepository;
import com.porfolio.BookService.utils.LiteraryMapper;

@Service
@Transactional
public class LiteraryGenreServiceImpl implements ILiteraryGenreService {

    @Autowired
    private LiteraryGenreRepository literaryGenreRepository;

    @Autowired
    private LiteraryMapper mapper;

    @Override
    @Transactional(readOnly = true)
    public List<LiteraryGenreDTO> getAllGenres() {
        return literaryGenreRepository.findAll().stream()
                .map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public LiteraryGenreDTO getGenreById(Long id) {

        LiteraryGenre genre = literaryGenreRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Literary genre", id));

        return mapper.toDTO(genre);
    }

    @Override
    public LiteraryGenreDTO createGenre(String genreName) {

        if (genreName == null || genreName.trim().isEmpty()) {
            throw new IllegalArgumentException("The genre name cannot be empty");
        }

        LiteraryGenre genre = new LiteraryGenre();

        genre.setLiteraryGenreName(genreName.trim());

        LiteraryGenre savedGenre = literaryGenreRepository.save(genre);

        return mapper.toDTO(savedGenre);
    }

    @Override
    public LiteraryGenreDTO updateGenre(Long id, String genreName) {
        LiteraryGenre existingGenre = literaryGenreRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Literary Genre", id));

        if (genreName == null || genreName.trim().isEmpty()) {
            throw new IllegalArgumentException("The genre name cannot be empty");
        }

        existingGenre.setLiteraryGenreName(genreName.trim());
        LiteraryGenre updatedGenre = literaryGenreRepository.save(existingGenre);
        return mapper.toDTO(updatedGenre);
    }

    @Override
    public void deleteGenre(Long id) {
        LiteraryGenre genre = literaryGenreRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Literary genre", id));

        if (!genre.getBooks().isEmpty()) {
            throw new IllegalStateException("The Literary genre cannot be deleted because they have associated books.");

        }
    }

}
