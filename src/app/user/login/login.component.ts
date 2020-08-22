import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/auth.service';
import { TokenService } from 'src/app/core/token.service';
import { FormFieldError } from 'src/app/shared/form-field-error.interface';
import { JwtResponse } from 'src/app/shared/jwt-response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  }, { updateOn: 'submit' });

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private tokenService: TokenService,
              private router: Router) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (data: JwtResponse): void => {
          // console.log(atob(data.accessToken.split('.')[1]));
          this.tokenService.saveToken(data.accessToken);
          this.tokenService.saveUser(data);
          this.router.navigate(['todo'])
        },
        (errors: FormFieldError[] | string): void => {
          if (typeof errors === 'string') {
            console.log(errors);
            if (errors === 'Unauthorized') {
              const validationErrors: ValidationErrors = {
                Unauthorized: 'invalid username/password combination'
              }
              this.loginForm.setErrors(validationErrors);
            }
          } else {
            for (const error of errors) {
              const validationErrors: ValidationErrors = {};
              validationErrors[error.code] = error.message;
              this.loginForm.get(error.field).setErrors(validationErrors);
            }
          }
        }
      );
    }
    this.loginForm.markAllAsTouched();
  }

}
