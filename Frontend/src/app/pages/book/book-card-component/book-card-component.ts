import { Component } from '@angular/core';
import { ImageBookCardComponent } from "../image-book-card-component/image-book-card-component";
import { DataBookComponent } from "../data-book-component/data-book-component";
import { ButtonPayProduct } from "../button-pay-product/button-pay-product";
import { ButtonAddCart } from "../button-add-cart/button-add-cart";
@Component({
  selector: 'app-book-card-component',
  imports: [ImageBookCardComponent, DataBookComponent, ButtonPayProduct, ButtonAddCart],
  templateUrl: './book-card-component.html',
  styleUrl: './book-card-component.css'
})
export class BookCardComponent {

}
