import { Component } from '@angular/core';

interface Quote {
  id: number;
  text: string;

}


@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent {

  quotes: Quote[] = [
    {
      id: 1,
      text: "Un lector vive mil vidas antes de morir. El que nunca lee vive solo una.",


    },
    {
      id: 2,
      text: "La lectura es al pensamiento lo que el ejercicio es al cuerpo.",

    },
    {
      id: 3,
      text: "Un libro es un sueño que sostienes en tus manos.",

    },
    {
      id: 4,
      text: "La lectura abre mentes, alimenta el alma y construye puentes entre mundos.",

    }
  ];
}