import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Task } from '../../shared/task.interface';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  task: Task;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dataService: DataService) { }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.dataService.getTask(id).subscribe(task => {
      this.task = task;
    })
  }

  updateTask(task: Task): void {
    task.id = this.task.id;
    this.dataService.updateTask(task).subscribe(
      task => {
        console.log('Successfully updated task: ', task);
        this.router.navigate(this.route.snapshot.url.slice(0,-1).map(seg => seg.path));
      },
      error => {
        console.error(error);
      }
    );
  }

}
