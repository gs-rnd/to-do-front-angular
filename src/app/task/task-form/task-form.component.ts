import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Task } from '../../shared/task.interface';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private dataService: DataService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'title': ['', Validators.required],
      'description': ['']
    });
  }

  get title() { return this.form.get('title'); }

  onSubmit(task: Task): void {
    this.dataService.addTask(task).subscribe(
      task => console.log('Successfully added task:', task)
    );
  }

}
