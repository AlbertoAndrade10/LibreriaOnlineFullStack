import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-button-hero-component',
  imports: [RouterLink],
  templateUrl: './button-hero-component.html',
  styleUrl: './button-hero-component.css'
})
export class ButtonHeroComponent {
  @Input() buttonText: string = '';
  @Input() routerLink: string | any[] | import('@angular/router').UrlTree | null | undefined;
}
