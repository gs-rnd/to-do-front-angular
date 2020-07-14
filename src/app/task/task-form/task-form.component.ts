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
  private task: Task;

  constructor(private formBuilder: FormBuilder,
              private dataService: DataService) {}

  ngOnInit(): void {
    this.task = history.state.task ? history.state.task : { title: '', description: '' };
    this.form = this.formBuilder.group({
      'title': [this.task.title, Validators.required],
      'description': [this.task.description]
    });
  }

  get title() { return this.form.get('title'); }

  onSubmit(task: Task): void {
    this.dataService.addTask(task).subscribe(
      task => console.log('Successfully added task:', task)
    );
  }

}
