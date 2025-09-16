import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header-component/header-component';


@Component({
  selector: 'app-base-layout',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './base-layout.html',
  styleUrl: './base-layout.css'
})
export class BaseLayout {

}
