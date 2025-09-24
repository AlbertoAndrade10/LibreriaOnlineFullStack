import { Injectable } from '@angular/core';
import { BaseApi } from '../BaseApiService/base-api';
import { Observable } from 'rxjs';
import { User } from '../../models/auth.model';
import { API_ENDPOINTS } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseApi {

  getCurrentUser(): Observable<User> {
    return this.get<User>(`${API_ENDPOINTS.USERS}/me`);
  }

  getUserById(id: number): Observable<User> {
    return this.get<User>(`${API_ENDPOINTS.USERS}/${id}`);
  }

}
