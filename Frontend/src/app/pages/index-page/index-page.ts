import { Component } from '@angular/core';
import { Hero } from "../../components/hero/hero";
import { CardsSectionHero } from "../../components/cards/cards-section-hero/cards-section-hero";

@Component({
  selector: 'app-index-page',
  imports: [Hero, CardsSectionHero],
  templateUrl: './index-page.html',
  styleUrl: './index-page.css'
})
export class IndexPage {

}
