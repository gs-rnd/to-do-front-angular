import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Task } from '../shared/task.interface';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private tasksUrl: string = 'assets/tasks.mock.json'

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl)
      .pipe(
        catchError(this.handleError<Task[]>('getTasks', []))
      )
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task[]>(this.tasksUrl)
      .pipe(
        map((tasks: Task[]) => 
          tasks.reduce((a, b) => {
            return (a === null && b.id === id) ? b : a;
          }, null)
        ),
        catchError(this.handleError<Task>('getTask', null))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

}
