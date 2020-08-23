import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { authInterceptorProviders } from './auth-interceptor';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent],
  providers: [authInterceptorProviders]
})
export class CoreModule {}
