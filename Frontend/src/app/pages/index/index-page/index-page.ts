import { Component } from '@angular/core';
import { HeroComponent } from "../hero-component/hero-component";

@Component({
  selector: 'app-index-page',
  imports: [HeroComponent],
  templateUrl: './index-page.html',
  styleUrl: './index-page.css'
})
export class IndexPage {

}
