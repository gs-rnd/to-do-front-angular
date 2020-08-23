import { Component, OnInit } from '@angular/core';

import { TokenService } from '../token.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private tokenService: TokenService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(
      (loggedInStatus: boolean): void => {
        this.isLoggedIn = loggedInStatus;
      }
    )
  }

  logout(): void {
    this.tokenService.logout();
    this.authService.logout();
    window.location.reload();
  }

}
