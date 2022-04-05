import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionStorageService } from '../services/session-storage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private session: SessionStorageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken: any = this.session.get('token') ? this.session.get('token') : '';

    const authReq = request.clone({
      headers: request.headers.set('Authorization', authToken)
    });

    return next.handle(authReq);
  }
}
