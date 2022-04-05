import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseFormComponent } from './course-form/course-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseRoutingModule } from './course-routing.module';
import { AuthModule } from 'src/app/auth/auth.module';



@NgModule({
  declarations: [
    CourseComponent,
    CourseFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    CourseRoutingModule,
    AuthModule
  ],
  exports: [
    CourseComponent
  ]
})
export class CourseModule { }
