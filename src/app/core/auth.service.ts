import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { User } from '../user/user.interface';
import { MessageResponse } from '../shared/message-response.interface';
import { catchError } from 'rxjs/operators';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http.post(AUTH_API + 'login', user, httpOptions);
  }

  register(user: User): Observable<MessageResponse> {
    return this.http
      .post<MessageResponse>(AUTH_API + 'register',
                              user,
                              httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
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
      }
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

}
