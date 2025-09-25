import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalSubject = new Subject<void>();
  private saveSubject = new Subject<void>();
  private openSubject = new Subject<void>();
  private closeSubject = new Subject<void>();

  modal$ = this.modalSubject.asObservable();
  save$ = this.saveSubject.asObservable();
  open$ = this.openSubject.asObservable();
  close$ = this.closeSubject.asObservable();

  openModal() {
    this.modalSubject.next();
  }

  saveModal() {
    this.saveSubject.next();
  }

  closeModal() {
    this.closeSubject.next();
  }

  emitOpen() {
    this.openSubject.next();
  }
}