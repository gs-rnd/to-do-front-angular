import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from 'src/app/core/auth.service';
import { MessageResponse } from 'src/app/shared/message-response.interface';

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
              private authService: AuthService) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("User from submitted form: ", this.registerForm.value);
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(
        (user: MessageResponse): void => {
          console.log("Success POST message:", user.message);
        },
        (error: any): void => {
          console.log("Error POST message:", error);
        }
      );
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

}
