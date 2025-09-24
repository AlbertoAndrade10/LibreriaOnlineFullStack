import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BaseApi } from '../BaseApiService/base-api';
import { LoginResponse, UserLogin, UserRegister } from '../../models/auth.model';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { AuthStateService } from './AuthState/auth-state-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseApi {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    http: HttpClient, private authStateService: AuthStateService
  ) {
    super(http);
  }

  register(user: UserRegister): Observable<any> {
    return this.post<any>(`${API_ENDPOINTS.AUTH}/signup`, user);
  }

  login(credentials: UserLogin): Observable<LoginResponse> {
    return this.post<LoginResponse>(`${API_ENDPOINTS.AUTH}/login`, credentials);
  }

  isAuthenticated(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('authToken');
    }
    return false;
  }


  isAdmin(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const token = this.getToken();
      if (token) {
        try {
          const payload = this.decodeToken(token);
          console.log('Payload del token:', payload);

          const role = payload?.role;
          console.log('Rol encontrado:', role);

          return role === 'ADMIN' || role === 'admin' || role === 'ROLE_ADMIN';
        } catch (error) {
          console.error('Error decodificando el token:', error);
          return false;
        }
      }
    }
    return false;
  }

  decodeToken(token: string): any {
    try {
      const payload = token.split('.')[1];
      const decoded = atob(payload);
      return JSON.parse(decoded);
    } catch (error) {
      console.error('Error decodificando el token:', error);
      return null;
    }
  }

  getCurrentUser(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      const token = this.getToken();
      if (token) {
        try {
          const payload = this.decodeToken(token);
          return payload?.fullName || payload?.name || payload?.sub;
        } catch (error) {
          console.error('Error obteniendo usuario del token:', error);
          return null;
        }
      }
    }
    return null;
  }

  setToken(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('authToken', token);
      this.authStateService.updateAuthState(true);
    }
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('authToken');
    }
    return null;
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('authToken');
      this.authStateService.updateAuthState(false);
    }
  }
}