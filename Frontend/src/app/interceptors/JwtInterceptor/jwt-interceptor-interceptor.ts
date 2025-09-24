import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/Auth/auth-service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private readonly authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // get token from localStorage
    const token = this.authService.getToken();

    // if there is a token and it's not an authentication request, add it to the header
    if (token && !req.url.includes('/auth/')) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(cloned);
    }

    return next.handle(req);
  }
}