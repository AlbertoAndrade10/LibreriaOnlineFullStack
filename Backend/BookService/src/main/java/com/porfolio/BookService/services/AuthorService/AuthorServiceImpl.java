package com.porfolio.BookService.services.AuthorService;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.porfolio.BookService.dtos.AuthorDTO;
import com.porfolio.BookService.exceptions.ResourceNotFoundException;
import com.porfolio.BookService.models.Author;
import com.porfolio.BookService.repositories.AuthorRepository;
import com.porfolio.BookService.utils.AuthorMapper;

@Service
@Transactional
public class AuthorServiceImpl implements IAuthorService {

    @Autowired
    private AuthorRepository authorRepository;

    @Autowired
    private AuthorMapper mapper;

    @Override
    @Transactional(readOnly = true)
    public List<AuthorDTO> getAllAuthors() {
        return authorRepository.findAll().stream()
                .map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public AuthorDTO getAuthorById(Long id) {

        Author author = authorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Author", id));
        return mapper.toDTO(author);
    }

    @Override
    public AuthorDTO createAuthor(String authorName) {
        if (authorName == null || authorName.trim().isEmpty()) {
            throw new IllegalArgumentException("The authorName cannot be empty");
        }

        Author author = new Author();
        author.setAuthorName(authorName.trim());

        Author savedAuthor = authorRepository.save(author);
        return mapper.toDTO(savedAuthor);
    }

    @Override
    public AuthorDTO updateAuthor(Long id, String authorName) {

        Author existingAuthor = authorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Author", id));

        existingAuthor.setAuthorName(authorName.trim());
        Author updatedAuthor = authorRepository.save(existingAuthor);

        return mapper.toDTO(updatedAuthor);
    }

    @Override
    public void deleteAuthor(Long id) {

        Author author = authorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Author", id));

        if (!author.getBooks().isEmpty()) {
            throw new IllegalStateException("The author cannot be deleted because they have associated books.");
        }

        authorRepository.deleteById(id);

    }

}
