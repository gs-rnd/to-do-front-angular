import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskFormComponent } from './task-form/task-form.component';


@NgModule({
  declarations: [TaskDetailsComponent, TaskFormComponent],
  imports: [
    CommonModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
