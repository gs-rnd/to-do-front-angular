import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Task } from '../../shared/task.interface';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  form: FormGroup;

  private _task: Task;
  @Input() set task(task: Task) {
    if (task) {
      this._task = task;
      this.form.setValue({
        title: task.title,
        description: task.description
      });
    }
  }
  get task(): Task { return this._task; }

  @Output() submitTask: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      'title': ['', Validators.required],
      'description': ['']
    });
  }

  ngOnInit(): void {
  }

  get title() { return this.form.get('title'); }

  onSubmit(task: Task): void {
    this.submitTask.emit(task);
  }

}
