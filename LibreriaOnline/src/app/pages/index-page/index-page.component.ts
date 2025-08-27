import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { QuoteComponent } from "../../components/cards/quote/quote.component";

@Component({
  selector: 'app-index-page',
  standalone: true,
  imports: [HeroComponent, QuoteComponent],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.css'
})
export class IndexPageComponent {

}
