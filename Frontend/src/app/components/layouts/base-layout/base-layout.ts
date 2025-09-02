import { Component } from '@angular/core';
import { Header } from "../../shared/header/header";
import { Footer } from "../../shared/footer/footer";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-base-layout',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './base-layout.html',
  styleUrl: './base-layout.css'
})
export class BaseLayout {

}
