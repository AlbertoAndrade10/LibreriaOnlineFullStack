import { Component } from '@angular/core';
import { HeroComponent } from "../hero-component/hero-component";
import { InspirationCardComponent } from "../inspiration-card-component/inspiration-card-component";


@Component({
  selector: 'app-index-page',
  imports: [HeroComponent, InspirationCardComponent],
  templateUrl: './index-page.html',
  styleUrl: './index-page.css'
})
export class IndexPage {

}
