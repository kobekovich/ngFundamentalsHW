import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard implements CanLoad {

  constructor(
    private router: Router,
    private auth: AuthService
    ) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> {
    return this.auth.isToken('token')
      .pipe(
        map(isAuthorised => 
          isAuthorised ? true : this.router.parseUrl('/login'))
      )
  }
}
