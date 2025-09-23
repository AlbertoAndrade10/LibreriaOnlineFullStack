import { Injectable } from '@angular/core';
import { BaseApi } from '../BaseApiService/base-api';
import { LoginResponse, UserLogin, UserRegister } from '../../models/auth.model';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseApi {

  register(user: UserRegister): Observable<any> {
    return this.post<any>(`${API_ENDPOINTS.AUTH}/signup`, user);
  }

  login(credentials: UserLogin): Observable<LoginResponse> {
    return this.post<LoginResponse>(`${API_ENDPOINTS.AUTH}/login`, credentials);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }

  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }

}
