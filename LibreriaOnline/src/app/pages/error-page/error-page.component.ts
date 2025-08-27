import { Component, OnInit } from '@angular/core';
import { SpinnerComponent } from "../../components/spinner/spinner.component";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [SpinnerComponent],
  providers: [NgxSpinnerService],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css'
})
export class ErrorPageComponent implements OnInit {
  constructor(private readonly spinner: NgxSpinnerService) { }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

}