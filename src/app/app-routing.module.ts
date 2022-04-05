import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from './auth/guards/authorized.guard';
import { NotAuthorizedGuard } from './auth/guards/not-authorized.guard';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule),
    canActivate: [NotAuthorizedGuard]
  },
  {
    path: 'registration',
    loadChildren: () => import('./features/registration/registration.module').then(m => m.RegistrationModule),
    canActivate: [NotAuthorizedGuard]
  },
  {
    path: 'courses',
    loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule),
    canLoad: [AuthorizedGuard]
  },
  { 
    path: '**', 
    redirectTo: 'courses' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthorizedGuard, NotAuthorizedGuard]
})
export class AppRoutingModule { }
