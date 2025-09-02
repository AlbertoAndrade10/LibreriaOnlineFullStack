import { Component } from '@angular/core';
import { InspirationalCard } from "../inspirational-card/inspirational-card";
import 'animate.css';
@Component({
  selector: 'app-cards-section-hero',
  imports: [InspirationalCard],
  templateUrl: './cards-section-hero.html',
  styleUrl: './cards-section-hero.css'
})
export class CardsSectionHero {

}
