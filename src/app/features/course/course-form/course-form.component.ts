import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenAuthorValidator } from 'src/app/shared/directives/forbidden-author.directive';
import { PostAuthor, Responce } from 'src/app/shared/models/authorItem';
import { AuthorsStoreService } from 'src/app/services/authors-store.service';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { PostCourse } from 'src/app/shared/models/courseItem';
import { utf8Encode } from '@angular/compiler/src/util';
import { unsupported } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  authorsArray!: Responce[];
  authorNames!: [];
  
  get courseTitle() {
    return this.courseForm.get('title');
  }

  get courseDescription() {
    return this.courseForm.get('description');
  }

  get duration() {
    return this.courseForm.get('duration');
  }

  get crsAuthor() {
    return this.courseForm.get('authors.authorName');
  }

  constructor(
    private fb: FormBuilder,
    private authorsStoreService: AuthorsStoreService,
    private courses: CoursesStoreService,
    private router: Router) { }

  courseForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    authors: this.fb.group({
      authorName: ['', forbiddenAuthorValidator(/^[a-z0-9]+$/i)]
    }),
    duration: ['', [Validators.required, Validators.min(0), Validators.pattern(/^[0-9]+$/)]]
  })

  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors() {
    this.authorsStoreService.getAll()
    .subscribe(data => this.authorsArray = data);
  }

  createAuthor() {
    this.authorsStoreService.addAuthor({name: this.courseForm.value.authors.authorName})
      .subscribe();
    
    this.getAuthors();
    this.ngOnInit();
  }

  onSubmit() {
    this.courseForm.value.duration = +this.courseForm.value.duration;
    this.courseForm.value.authors = this.authorsArray.map(m => m.id);

    this.courses.createCourse(this.courseForm.value)
      .subscribe(() => this.router.navigate(['/courses']));
  }

  deleteAuthor(id: string) {
    this.authorsStoreService.deleteAuthor(id)
      .subscribe();

    this.getAuthors();
    this.ngOnInit();
  }
}
