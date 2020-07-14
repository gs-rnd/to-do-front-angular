import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Task } from '../shared/task.interface';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private tasksUrl: string = 'assets/tasks.mock.json';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

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

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>('http://localhost:8080/tasks', task, this.httpOptions)
      .pipe(
        catchError(this.handleError<Task>('addTask'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

}
