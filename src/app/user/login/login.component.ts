import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/core/auth.service';
import { TokenService } from 'src/app/core/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private tokenService: TokenService) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(
      data => {
        console.log("Success Login POST: ", data);
        this.tokenService.saveToken(data.accessToken);
        this.tokenService.saveUser(data);
      },
      (error: any): void => {
        console.error("Error Login POST: ", error);
      }
    );
  }

}
