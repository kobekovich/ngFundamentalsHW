import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { AuthModule } from 'src/app/auth/auth.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    LoginRoutingModule,
    AuthModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
