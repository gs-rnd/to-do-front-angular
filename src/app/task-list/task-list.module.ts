import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskListRoutingModule } from './task-list-routing.module';
import { TaskListComponent } from './task-list.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [
    TaskListComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    TaskListRoutingModule
  ],
  exports: [TaskListComponent]
})
export class TaskListModule { }
