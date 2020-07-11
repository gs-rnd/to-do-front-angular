import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../core/data.service';

import { Task } from '../shared/task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  toDoTasks: Task[] = [];
  selectedTask: Task;

  constructor(private router: Router,
              private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTasks().subscribe((tasks: Task[]) => {
      this.toDoTasks = tasks;
    });
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
