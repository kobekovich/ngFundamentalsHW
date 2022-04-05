import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, map, tap } from 'rxjs/operators';
import { CourseResponce, PostCourse } from '../shared/models/courseItem';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})

export class CoursesStoreService {
  private isLoading$$ = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading$$.asObservable();

  private courses$$ = new BehaviorSubject<CourseResponce[]>([]);
  courses$ = this.courses$$.asObservable();

  private searchInput$$ = new BehaviorSubject<string>('');
  searchInput$ = this.searchInput$$.asObservable();

  constructor(private coursesServise: CoursesService) { }

  setIsLoading(isLoading: boolean): void {
    this.isLoading$$.next(isLoading);
  }

  setCourses(courses: CourseResponce[]) {
    this.courses$$.next(courses);
  }

  setInput(input: string) {
    this.searchInput$$.next(input);
  }

  getAll(): Observable<CourseResponce[]> {
    this.setIsLoading(true);

    return this.coursesServise.getAll()
    .pipe(
      map(m => m.result),
      tap(courses => this.setCourses(courses)),
      finalize(() => {
        this.setIsLoading(false)
      })
    )
  }

  createCourse(atr: PostCourse) {
    this.setIsLoading(true);

    return this.coursesServise.createCourse(atr)
    .pipe(
      finalize(() => {
        this.setIsLoading(false)
      })
    )
  }

  getCourse(id: string): Observable<CourseResponce> {
    this.setIsLoading(true);

    return this.coursesServise.getCourse(id)
    .pipe(
      map(m => m.result),
      finalize(() => {
        this.setIsLoading(false)
      })
    )
  }

  editCourse(id: string, body: PostCourse) {
    this.setIsLoading(true);

    return this.coursesServise.editCourse(id, body)
    .pipe(
      finalize(() => {
        this.setIsLoading(false)
      })
    )
  }

  deleteCourse(id: string) {
    this.setIsLoading(true);

    return this.coursesServise.deleteCourse(id)
    .pipe(
      finalize(() => {
        this.setIsLoading(false)
      })
    )
  }
}
