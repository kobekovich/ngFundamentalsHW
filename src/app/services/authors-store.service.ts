import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthorsService } from './authors.service';
import { finalize, map, tap } from 'rxjs/operators';
import { PostAuthor, Responce } from '../shared/models/authorItem';

@Injectable({
  providedIn: 'root'
})
export class AuthorsStoreService {
  private isLoading$$ = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading$$.asObservable();

  private authors$$ = new BehaviorSubject<Responce[]>([]);
  authors$ = this.authors$$.asObservable();

  constructor(private authorsService: AuthorsService) { }

  setIsLoading(isLoading: boolean): void {
    this.isLoading$$.next(isLoading);
  }

  setAuthors(authors: Responce[]) {
    this.authors$$.next(authors);
  }

  getAll(): Observable<Responce[]> {
    this.setIsLoading(true);

    return this.authorsService.getAll()
    .pipe(
      map(m => m.result),
      tap(authors => this.setAuthors(authors)),
      finalize(() => {
        this.setIsLoading(false)
      })
    )
  } 

  addAuthor(atr: PostAuthor) {
    this.setIsLoading(true);

    return this.authorsService.addAuthor(atr)
    .pipe(
      finalize(() => {
        this.setIsLoading(false)
      })
    )
  }

  deleteAuthor(id: string) {
    return this.authorsService.deleteAuthor(id);
  }
}
