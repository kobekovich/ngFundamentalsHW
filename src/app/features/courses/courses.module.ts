import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseEditComponent } from './course-edit/course-edit.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CourseCardComponent,
    CourseListComponent,
    CourseDetailComponent,
    CourseEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoursesRoutingModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
