import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from 'src/app/core/data.service';

import { Task } from 'src/app/shared/task.interface';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  task: Task;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dataService: DataService) {}

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.dataService.getTask(id).subscribe(task => {
      this.task = task;
    })
  }

  editTask(): void {
    this.router.navigate(['task', this.task.id, 'edit'],
      {state: {task: this.task}});
  }

}
