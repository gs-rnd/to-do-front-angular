import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TaskListModule } from './task-list/task-list.module';
import { TaskModule } from './task/task.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TaskListModule,
    TaskModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
