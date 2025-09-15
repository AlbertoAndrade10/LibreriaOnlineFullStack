package com.porfolio.BookService.services;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.ArgumentMatchers.argThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.porfolio.BookService.dtos.AuthorDTO;
import com.porfolio.BookService.models.Author;
import com.porfolio.BookService.models.Book;
import com.porfolio.BookService.repositories.AuthorRepository;
import com.porfolio.BookService.services.AuthorService.AuthorServiceImpl;
import com.porfolio.BookService.utils.AuthorMapper;

import static org.assertj.core.api.Assertions.*;

import com.porfolio.BookService.exceptions.ResourceNotFoundException;

@ExtendWith(MockitoExtension.class)
public class AuthorServiceImplTest {

    @Mock
    private AuthorRepository authorRepository;

    @Mock
    private AuthorMapper mapper;

    @InjectMocks
    private AuthorServiceImpl authorService;

    private Author author;
    private AuthorDTO authorDTO;

    @BeforeEach
    void setUp() {
        author = new Author();
        author.setId(1L);
        author.setAuthorName("Testeo");

        authorDTO = new AuthorDTO();
        authorDTO.setId(1L);
        authorDTO.setAuthorName("Testeo");
    }

    @Test
    void getAllAuthors_shouldReturnListOfAuthorsDTOs() {
        //given
        List<Author> authors = Arrays.asList(author, new Author());
        when(authorRepository.findAll()).thenReturn(authors);
        when(mapper.toDTO(any(Author.class))).thenReturn(authorDTO);

        //when
        List<AuthorDTO> result = authorService.getAllAuthors();

        //then
        assertThat(result).hasSize(2);
        assertThat(result).containsExactly(authorDTO, authorDTO);
        verify(authorRepository).findAll();
        verify(mapper, times(2)).toDTO(any(Author.class));
    }

    @Test
    void getAllAuthors_shouldReturnEmptyList_whenNoAuthorsExist() {
        // given
        when(authorRepository.findAll()).thenReturn(Arrays.asList());

        // when
        List<AuthorDTO> result = authorService.getAllAuthors();

        // Then
        assertThat(result).isEmpty();
        verify(authorRepository).findAll();
    }

    @Test
    void getAuthorById_shouldReturnAuthorDTO_whenAuthorExists() {
        // given
        Long authorId = 1L;
        when(authorRepository.findById(authorId)).thenReturn(Optional.of(author));
        when(mapper.toDTO(author)).thenReturn(authorDTO);

        // when
        AuthorDTO result = authorService.getAuthorById(authorId);

        // then
        assertThat(result).isNotNull();
        assertThat(result.getId()).isEqualTo(1L);
        assertThat(result.getAuthorName()).isEqualTo("Testeo");
        verify(authorRepository).findById(authorId);
        verify(mapper).toDTO(author);
    }

    @Test
    void getAuthorById_shouldThrowResourceNotFoundException_whenAuthorDoesNotExist() {
        // Given
        Long authorId = 1L;
        when(authorRepository.findById(authorId)).thenReturn(Optional.empty());

        // When & Then
        assertThatThrownBy(() -> authorService.getAuthorById(authorId))
                .isInstanceOf(ResourceNotFoundException.class)
                .hasMessage("Author with id 1 not found");

        verify(authorRepository).findById(authorId);
        verify(mapper, never()).toDTO(any());
    }

    @Test
    void createAuthor_shouldCreateAndReturnAuthorDTO_whenValidNameProvided() {
        // Given
        String authorName = "Testeo";
        when(authorRepository.save(any(Author.class))).thenReturn(author);
        when(mapper.toDTO(author)).thenReturn(authorDTO);

        // When
        AuthorDTO result = authorService.createAuthor(authorName);

        // Then
        assertThat(result).isNotNull();
        assertThat(result.getAuthorName()).isEqualTo("Testeo");
        verify(authorRepository).save(any(Author.class));
        verify(mapper).toDTO(author);
    }

    @Test
    void createAuthor_shouldTrimWhitespace_whenNameHasLeadingTrailingSpaces() {
        // Given
        String authorName;
        authorName = "  Testeo  ";
        Author expectedAuthor = new Author();
        expectedAuthor.setAuthorName("Testeo");
        when(authorRepository.save(argThat(author -> author.getAuthorName().equals("Testeo"))))
                .thenReturn(author);
        when(mapper.toDTO(author)).thenReturn(authorDTO);

        // When
        AuthorDTO result = authorService.createAuthor(authorName);

        // Then
        assertThat(result.getAuthorName()).isEqualTo("Testeo");
        verify(authorRepository).save(argThat(author -> author.getAuthorName().equals("Testeo")));
    }

    @Test
    void createAuthor_shouldThrowIllegalArgumentException_whenNameIsNull() {
        // When & Then
        assertThatThrownBy(() -> authorService.createAuthor(null))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessage("The authorName cannot be empty");

        verify(authorRepository, never()).save(any());
        verify(mapper, never()).toDTO(any());
    }

    @Test
    void createAuthor_shouldThrowIllegalArgumentException_whenNameIsEmpty() {
        // When & Then
        assertThatThrownBy(() -> authorService.createAuthor(""))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessage("The authorName cannot be empty");

        verify(authorRepository, never()).save(any());
        verify(mapper, never()).toDTO(any());
    }

    @Test
    void createAuthor_shouldThrowIllegalArgumentException_whenNameIsOnlyWhitespace() {
        // When & Then
        assertThatThrownBy(() -> authorService.createAuthor("   "))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessage("The authorName cannot be empty");

        verify(authorRepository, never()).save(any());
        verify(mapper, never()).toDTO(any());
    }

    @Test
    void updateAuthor_shouldUpdateAndReturnAuthorDTO_whenAuthorExists() {
        // Given
        Long authorId = 1L;
        String updatedName = "Jane Doe";
        when(authorRepository.findById(authorId)).thenReturn(Optional.of(author));
        when(authorRepository.save(author)).thenReturn(author);
        when(mapper.toDTO(author)).thenReturn(authorDTO);

        // When
        AuthorDTO result = authorService.updateAuthor(authorId, updatedName);

        // Then
        assertThat(result).isNotNull();
        assertThat(author.getAuthorName()).isEqualTo("Testeo");
        verify(authorRepository).findById(authorId);
        verify(authorRepository).save(author);
        verify(mapper).toDTO(author);
    }

    @Test
    void updateAuthor_shouldThrowResourceNotFoundException_whenAuthorDoesNotExist() {
        // Given
        Long authorId = 1L;
        String updatedName = "Testeo";
        when(authorRepository.findById(authorId)).thenReturn(Optional.empty());

        // When & Then
        assertThatThrownBy(() -> authorService.updateAuthor(authorId, updatedName))
                .isInstanceOf(ResourceNotFoundException.class)
                .hasMessage("Author with id 1 not found");

        verify(authorRepository).findById(authorId);
        verify(authorRepository, never()).save(any());
        verify(mapper, never()).toDTO(any());
    }

    @Test
    void deleteAuthor_shouldDeleteAuthor_whenAuthorExistsAndHasNoBooks() {
        // Given
        Long authorId = 1L;
        when(authorRepository.findById(authorId)).thenReturn(Optional.of(author));
        when(author.getBooks()).thenReturn(Arrays.asList()); // Empty list

        // When
        authorService.deleteAuthor(authorId);

        // Then
        verify(authorRepository).findById(authorId);
        verify(authorRepository).deleteById(authorId);
    }

    @Test
    void deleteAuthor_shouldThrowResourceNotFoundException_whenAuthorDoesNotExist() {
        // Given
        Long authorId = 1L;
        when(authorRepository.findById(authorId)).thenReturn(Optional.empty());

        // When & Then
        assertThatThrownBy(() -> authorService.deleteAuthor(authorId))
                .isInstanceOf(ResourceNotFoundException.class)
                .hasMessage("Author with id 1 not found");

        verify(authorRepository).findById(authorId);
        verify(authorRepository, never()).deleteById(anyLong());
    }

    @Test
    void deleteAuthor_shouldThrowIllegalStateException_whenAuthorHasAssociatedBooks() {
        // Given
        Long authorId = 1L;
        when(authorRepository.findById(authorId)).thenReturn(Optional.of(author));

        Book mockBook = mock(Book.class);
        when(author.getBooks()).thenReturn(Arrays.asList(mockBook));

        // When & Then
        assertThatThrownBy(() -> authorService.deleteAuthor(authorId))
                .isInstanceOf(IllegalStateException.class)
                .hasMessage("The author cannot be deleted because they have associated books.");

        verify(authorRepository).findById(authorId);
        verify(authorRepository, never()).deleteById(anyLong());
    }

}
