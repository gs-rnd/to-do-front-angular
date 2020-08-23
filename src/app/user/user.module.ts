import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

import { RegisterComponent } from './register/register.component';
import { PasswordsMatchValidatorDirective } from './register/passwords-match-validator.directive';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    RegisterComponent,
    PasswordsMatchValidatorDirective,
    LoginComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
