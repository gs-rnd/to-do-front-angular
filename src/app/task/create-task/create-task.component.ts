import { Component, OnInit } from '@angular/core';

import { Task } from 'src/app/shared/task.interface';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  private task: Task;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  addTask(task: Task): void {
    this.dataService.addTask(task).subscribe(
      task => console.log('Successfully added task:', task)
    );
  }

}
