import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-alert',
  imports: [],
  templateUrl: './custom-alert.html',
  styleUrl: './custom-alert.css'
})
export class CustomAlert {
  manageModal: boolean = false;

  @Input() descriptionAlert: string = '';
  @Input() buttonText: string = '';



  openModal() {
    this.manageModal = true;
  }
  closeModal() {
    this.manageModal = false;
  }

}
