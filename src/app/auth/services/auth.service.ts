import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Credentials, LoginResponce } from 'src/app/shared/models/auth';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthorized$$ = new BehaviorSubject<boolean>(false);
  isAuthorized$ = this.isAuthorized$$.asObservable();

  constructor(
    private http: HttpClient,
    private sessionService: SessionStorageService
    ) { }

  setAuthorized(authorized: boolean) {
    this.isAuthorized$$.next(authorized);
  }

  isToken(token: string): Observable<boolean> {
    return this.sessionService.get(token) ? of(true) : of(false);
  }

  login(creds: Credentials): Observable<string> {
    return this.http.post<LoginResponce>('http://localhost:3000/login', creds)
    .pipe(
      map(m => {
        if(m.successful) {
          this.setAuthorized(true);
          this.sessionService.set('token', m.result);
          return m.result;
        } else {
          return m.result;
        }
      })
    )
  }

  register(creds: Credentials): Observable<string> {
    return this.http.post<LoginResponce>('http://localhost:3000/register', creds)
      .pipe(
        map(m => m.result)
      );
  }

  logout() {
    return this.http.delete('http://localhost:3000/logout')
      .pipe(
        map(() => this.setAuthorized(false))
      );
  }
}
