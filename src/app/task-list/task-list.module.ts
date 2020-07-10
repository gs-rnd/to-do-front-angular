import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskListComponent } from './task-list.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [
    TaskListComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TaskListComponent]
})
export class TaskListModule { }
