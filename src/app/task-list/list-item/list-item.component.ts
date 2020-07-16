import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../../shared/task.interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() task: Task;

  constructor() { }

  ngOnInit(): void {
  }

}
