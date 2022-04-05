import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export function forbiddenAuthorValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = !nameRe.test(control.value);
    return forbidden ? {forbiddenAuthor: {value: control.value}} : null;
  };
}

@Directive({
  selector: '[appForbiddenAuthor]',
  providers: [
    {
      provide: NG_VALIDATORS, 
      useExisting: ForbiddenAuthorDirective, 
      multi: true}
  ]
})
export class ForbiddenAuthorDirective implements Validator {

  constructor() { }
  @Input('appForbiddenAuthor') forbiddenAuthor!: string;

  validate(control: AbstractControl): {[key: string]: any} | null {

    return this.forbiddenAuthor ? forbiddenAuthorValidator(new RegExp(this.forbiddenAuthor))(control) : null;
  }
}

