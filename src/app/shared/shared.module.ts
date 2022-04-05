import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { InfoComponent } from './components/info/info.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderContentComponent } from './components/header/header-content/header-content.component';
import { IconComponent } from './components/icon/icon.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ForbiddenAuthorDirective } from './directives/forbidden-author.directive';
import { ForbiddenValidatorDirective } from './directives/forbidden-email.directive';
import { FormsModule } from '@angular/forms';
import { DurationPipe } from './pipes/duration.pipe';
import { CreationDatePipe } from './pipes/creation-date.pipe';
import { StringJoinerPipe } from './pipes/string-joiner.pipe';
import { TogglePasswordDirective } from './directives/toggle-password.directive';
import { AuthModule } from '../auth/auth.module';

const sharedImportedComponents = [HeaderComponent, ButtonComponent, InfoComponent, SearchComponent, HeaderContentComponent,
  IconComponent, DialogComponent, SearchComponent,
  ForbiddenValidatorDirective, ForbiddenAuthorDirective, TogglePasswordDirective,  
  DurationPipe, CreationDatePipe, StringJoinerPipe];

@NgModule({
  declarations: [
    sharedImportedComponents
  ],
  imports: [
    CommonModule, MatDialogModule, FormsModule, AuthModule
  ],
  exports: [
    sharedImportedComponents
  ]
})
export class SharedModule { }
