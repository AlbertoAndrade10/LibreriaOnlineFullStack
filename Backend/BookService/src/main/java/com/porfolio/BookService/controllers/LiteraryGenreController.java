package com.porfolio.BookService.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.porfolio.BookService.dtos.LiteraryGenreDTO;
import com.porfolio.BookService.services.LiteraryGenreService.ILiteraryGenreService;

@RestController
@RequestMapping("/api/v1/literary-genres")
@CrossOrigin(origins = "http://localhost:4200")
public class LiteraryGenreController {

    @Autowired
    private ILiteraryGenreService literaryGenreService;

    @GetMapping
    public ResponseEntity<List<LiteraryGenreDTO>> getAllGenres() {
        List<LiteraryGenreDTO> genres = literaryGenreService.getAllGenres();
        return ResponseEntity.ok(genres);
    }

    @GetMapping("/{id}")
    public ResponseEntity<LiteraryGenreDTO> getGenreById(@PathVariable Long id) {
        LiteraryGenreDTO genre = literaryGenreService.getGenreById(id);
        return ResponseEntity.ok(genre);
    }

    @PostMapping
    public ResponseEntity<LiteraryGenreDTO> createGenre(@RequestParam String genreName) {
        if (genreName == null || genreName.trim().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }

        LiteraryGenreDTO createdGenre = literaryGenreService.createGenre(genreName.trim());
        return new ResponseEntity<>(createdGenre, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<LiteraryGenreDTO> updateGenre(@PathVariable Long id,
            @RequestParam String genreName) {
        if (genreName == null || genreName.trim().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }

        LiteraryGenreDTO updatedGenre = literaryGenreService.updateGenre(id, genreName.trim());
        return ResponseEntity.ok(updatedGenre);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGenre(@PathVariable Long id) {
        literaryGenreService.deleteGenre(id);
        return ResponseEntity.noContent().build();
    }
}
