import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResponce } from 'src/app/shared/models/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<UserResponce>('http://localhost:3000/users/me');
  }
}
