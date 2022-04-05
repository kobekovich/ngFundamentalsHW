import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/user/guards/admin.guard';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CoursesComponent } from './courses.component';

const routes: Routes = [
  { 
    path: '', 
    component: CoursesComponent 
  },
  {
    path: 'add',
    loadChildren: () => import('../course/course.module').then(m => m.CourseModule),
    canActivate: [AdminGuard]
  },
  {
    path: ':id',
    component: CourseDetailComponent
  },
  {
    path: 'edit/:id',
    component: CourseEditComponent,
    canActivate: [AdminGuard]
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AdminGuard]
})
export class CoursesRoutingModule {}
