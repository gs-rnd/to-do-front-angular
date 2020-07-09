import { Component, OnInit } from '@angular/core';

import { Task } from './task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  toDoTasks: Task[] = [
    { id: 1, title: 'Make To Do App', description: 'using Angular create a SPA for the front end.' },
    { id: 2, title: 'Create component to display individual tasks' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
