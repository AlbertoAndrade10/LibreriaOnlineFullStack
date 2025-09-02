import { Component } from '@angular/core';
import { Hero } from "../../components/hero/hero";

@Component({
  selector: 'app-index-page',
  imports: [Hero],
  templateUrl: './index-page.html',
  styleUrl: './index-page.css'
})
export class IndexPage {

}
