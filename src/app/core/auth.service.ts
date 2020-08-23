import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '../user/user.interface';
import { MessageResponse } from '../shared/message-response.interface';
import { JwtResponse } from '../shared/jwt-response.interface';


const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: Subject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  login(user: User): Observable<JwtResponse> {
    return this.http
      .post<JwtResponse>(AUTH_API + 'login', user, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  register(user: User): Observable<MessageResponse> {
    return this.http
      .post<MessageResponse>(AUTH_API + 'register', user, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code: ${error.status}\nbody was: `,
        error.error);
      if (error.status === 400) {
        return throwError(error.error);
      } else if (error.status === 401) {
        return throwError(error.error.error);
      }
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

  public loginSuccess(): void {
    this.isLoggedIn.next(true);
  }

  public logout(): void {
    this.isLoggedIn.next(false);
  }

}
