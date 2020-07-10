import { Component, OnInit } from '@angular/core';

import { Task } from './task.interface';
import { TASKS } from '../tasks.mock';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  toDoTasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {
    this.toDoTasks = TASKS;
  }

}
