import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from '../shared/task.interface';
import { TASKS } from '../tasks.mock';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  toDoTasks: Task[] = [];
  selectedTask: Task;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.toDoTasks = TASKS;
  }

  onClick(task: Task): void {
    if (this.selectedTask && this.selectedTask.id === task.id) {
      this.router.navigate(['/task', task.id]);
    }
    this.selectedTask = task;
  }

  isSelected(task: Task): boolean {
    if (!this.selectedTask) {
      return false;
    }
    return task.id === this.selectedTask.id;
  }

}
