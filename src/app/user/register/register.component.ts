import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/auth.service';
import { MessageResponse } from 'src/app/shared/message-response.interface';
import { FormFieldError } from 'src/app/shared/form-field-error.interface';

import { passwordsMatchValidator } from './passwords-match-validator.directive';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    verifyPassword: ['']
  }, { validators: passwordsMatchValidator, updateOn: 'submit' });

  get username() { return this.registerForm.get('username'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.username.setValue(this.username.value.trim());
    this.email.setValue(this.email.value.trim());
    this.password.setValue(this.password.value.trim());
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(
        (user: MessageResponse): void => {
          console.log(user.message);
          this.router.navigate(['login']);
        },
        (errors: FormFieldError[] | string): void => {
          if (typeof errors === 'string') {
            console.log(errors);
          } else {
            for (const error of errors) {
              let validationError: ValidationErrors = {};
              validationError[error.code] = error.message;
              this.registerForm.get(error.field).setErrors(validationError);
            }
          }
        }
      );
    }
    this.registerForm.markAllAsTouched();
  }

}
