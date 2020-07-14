import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
      task => console.log('Successfully updated task: ', task)
    )
  }

}
