import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorsStoreService } from 'src/app/services/authors-store.service';
import { CoursesStoreService } from 'src/app/services/courses-store.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  showCourseList!: any;
  courseId: any;
  buttonText = {goBack: "Go Back"};

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private coursesStoreServise: CoursesStoreService
    ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.courseId = id;

    this.coursesStoreServise.getCourse(this.courseId)
    .subscribe(data => {
      this.showCourseList = data;
    });
  }

  goBack() {
    this.router.navigate(['/courses']);
  }

}
