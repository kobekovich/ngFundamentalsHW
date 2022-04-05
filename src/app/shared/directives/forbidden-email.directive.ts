import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export function forbiddenEmailValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = !nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}

@Directive({
  selector: '[appForbiddenName]',
  providers: [
    {
      provide: NG_VALIDATORS, 
      useExisting: ForbiddenValidatorDirective, 
      multi: true}
  ]
})
export class ForbiddenValidatorDirective implements Validator {

  constructor() { }
  @Input('appForbiddenName') forbiddenName!: string;

  validate(control: AbstractControl): {[key: string]: any} | null {

    return this.forbiddenName ? forbiddenEmailValidator(new RegExp(this.forbiddenName))(control) : null;
  }

}
