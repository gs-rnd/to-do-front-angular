import { Directive } from '@angular/core';
import {
  Validator,
  ValidatorFn,
  ValidationErrors,
  NG_VALIDATORS,
  AbstractControl,
} from '@angular/forms';

export const passwordsMatchValidator: ValidatorFn = 
  (control: AbstractControl): ValidationErrors | null => {
    const pass: AbstractControl = control.get('password');
    const verify: AbstractControl = control.get('verifyPassword');
    return pass && verify && pass.value !== verify.value ?
      { passwordsMatch: true } :
      null;
  }

@Directive({
  selector: '[passwordsMatchValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordsMatchValidatorDirective,
    multi: true
  }]
})
export class PasswordsMatchValidatorDirective implements Validator {

  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    return passwordsMatchValidator(control);
  }

}
