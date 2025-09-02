import { Component } from '@angular/core';
import { Header } from "../../shared/header/header";
import { Footer } from "../../shared/footer/footer";

@Component({
  selector: 'app-base-layout',
  imports: [Header, Footer],
  templateUrl: './base-layout.html',
  styleUrl: './base-layout.css'
})
export class BaseLayout {

}
