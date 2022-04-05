import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './features/courses/courses.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './features/login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationModule } from './features/registration/registration.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/interceptors/token.interceptor';
import { StoreModule } from '@ngrx/store';
import { effects, reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { UserStateFacade } from './user/store/user.facade';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoursesModule,
    FontAwesomeModule,
    SharedModule,
    LoginModule, 
    RegistrationModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot(effects)
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,   
    useClass: TokenInterceptor, 
    multi: true},
    UserStateFacade
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
