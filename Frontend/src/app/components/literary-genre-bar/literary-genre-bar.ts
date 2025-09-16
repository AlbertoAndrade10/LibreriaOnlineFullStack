import { Component } from '@angular/core';

@Component({
  selector: 'app-literary-genre-bar',
  imports: [],
  templateUrl: './literary-genre-bar.html',
  styleUrl: './literary-genre-bar.css'
})
export class LiteraryGenreBar {
  //Simulacion de géneros literarios
  genres = [
    { name: 'Ficción' },
    { name: 'No Ficción' },
    { name: 'Misterio' },
    { name: 'Ciencia Ficción' },
    { name: 'Romance' },
    { name: 'Fantasia' },
    { name: 'Historia' },
    { name: 'Biografía' },
    { name: 'Autoayuda' },
    { name: 'Poesía' }
  ];
}
