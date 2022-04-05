import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthorsStoreService } from 'src/app/services/authors-store.service';
import { CoursesStoreService } from 'src/app/services/courses-store.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  public buttonText = {showCourse: "Show course"};

  courses$ = combineLatest([this.coursesStoreServise.courses$, this.coursesStoreServise.searchInput$])
    .pipe(
      map(([courses, searchString]) => {
        return courses.filter(
          item =>
            item.description.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) > -1 ||
            item.title.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) > -1
        )
      })
    )
  
  constructor(
    private router: Router,
    private coursesStoreServise: CoursesStoreService,
    private authors: AuthorsStoreService
    ) { }

  ngOnInit(): void {
    this.coursesStoreServise.getAll()
      .subscribe();
  }

  onShow(l: { id: string; }) {
    this.router.navigate(['/courses', l.id]);
  }

  editCourse(l: { id: any; }) {
    this.router.navigate(['/courses/edit', l.id]);
  }

  deleteCourse(l: { id: string; }) {
    this.coursesStoreServise.deleteCourse(l.id)
      .subscribe(() => this.ngOnInit());
  }

}
