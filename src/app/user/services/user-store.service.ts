import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private isAdmin$$ = new BehaviorSubject<boolean>(false);
  isAdmin$ = this.isAdmin$$.asObservable();

  private name$$ = new BehaviorSubject<string>('');
  name$ = this.name$$.asObservable();

  constructor(private user: UserService) { }

  setAdmin(admin: boolean) {
    this.isAdmin$$.next(admin);
  }

  setName(name: string) {
    this.name$$.next(name);
  }

  getUser() {
    return this.user.getUser()
    .pipe(
      map(m => {
        m.result.role === 'admin' ? this.setAdmin(true) : false;
        this.setName(m.result.email);
        return m;
      })
    );
  }
}
