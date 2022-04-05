import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseItem, GetCourseItem, PostCourse } from '../shared/models/courseItem';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<CourseItem> {
    return this.http.get<CourseItem>('http://localhost:3000/courses/all');
  }

  createCourse(atr: PostCourse) {
    return this.http.post('http://localhost:3000/courses/add', atr);
  }

  getCourse(id: string): Observable<GetCourseItem> {
    return this.http.get<GetCourseItem>(`http://localhost:3000/courses/${id}`);
  }
  
  editCourse(id: string, body: PostCourse) {
    return this.http.put(`http://localhost:3000/courses/${id}`, body);
  }

  deleteCourse(id: string) {
    return this.http.delete(`http://localhost:3000/courses/${id}`);
  }
}
