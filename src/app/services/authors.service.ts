import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthorItem, PostAuthor } from '../shared/models/authorItem';


@Injectable({
  providedIn: 'root'
})

export class AuthorsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<AuthorItem> {
    return this.http.get<AuthorItem>('http://localhost:3000/authors/all');
  }

  addAuthor(atr: PostAuthor) {
    return this.http.post('http://localhost:3000/authors/add', atr);
  }

  deleteAuthor(id: string) {
    return this.http.delete(`http://localhost:3000/authors/${id}`);
  }
}
