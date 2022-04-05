import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotAuthorizedGuard implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService
    ) {}
    
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree>{
      return this.auth.isToken('token')
      .pipe(
        map(isAuthorised =>
          !isAuthorised ? true : this.router.parseUrl('/courses'))
      )
  } 
}
