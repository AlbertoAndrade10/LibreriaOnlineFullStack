import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  private authStateSubject = new BehaviorSubject<boolean>(false);

  public authState$ = this.authStateSubject.asObservable();

  updateAuthState(isAuthenticated: boolean): void {

    this.authStateSubject.next(isAuthenticated);
  }
}
