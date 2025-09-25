import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionComponent } from "../action-component/action-component";
import { ModalService } from '../service/modal-service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-global-template-content',
  imports: [ActionComponent],
  templateUrl: './global-template-content.html',
  styleUrl: './global-template-content.css'
})
export class GlobalTemplateContent implements OnInit {
  @Input() modalTitle: string = 'Modal';
  @Output() modalOpen = new EventEmitter<void>();
  @Output() modalSave = new EventEmitter<void>();

  showModal: boolean = false;
  private subscription = new Subscription();

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.modalService.modal$.subscribe(() => {
        this.showModal = true;
        this.modalOpen.emit();
      })
    );

    this.subscription.add(
      this.modalService.save$.subscribe(() => {
        this.onModalSave();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onModalSave() {
    this.modalSave.emit();
    this.showModal = false;
    this.modalService.emitOpen();
  }

  closeModal() {
    this.showModal = false;
  }

}
