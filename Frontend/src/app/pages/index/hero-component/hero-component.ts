import { Component } from '@angular/core';
import { ImageHeroComponent } from "../image-hero-component/image-hero-component";
import { TextHeroComponent } from "../text-hero-component/text-hero-component";
import { ButtonHeroComponent } from "../button-hero-component/button-hero-component";

@Component({
  selector: 'app-hero-component',
  imports: [ImageHeroComponent, TextHeroComponent, ButtonHeroComponent],
  templateUrl: './hero-component.html',
  styleUrl: './hero-component.css'
})
export class HeroComponent {

}
