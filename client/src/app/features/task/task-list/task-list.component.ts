import { Component, OnInit } from '@angular/core';
import {
  faPlusCircle,
  faCheckCircle,
  faTimesCircle,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;
  faInfoCircle = faInfoCircle;

  constructor() {
  }

  ngOnInit(): void {
  }

}
