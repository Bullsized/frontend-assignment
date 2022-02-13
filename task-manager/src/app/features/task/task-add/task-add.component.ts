import { Component, OnInit } from '@angular/core';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { getTaskFormGroup } from '../shared/task-form-group/form.group';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['../task.component.scss']
})
export class TaskAddComponent implements OnInit {
  faChevronCircleLeft = faChevronCircleLeft;
  form = getTaskFormGroup();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddSubmit() {
  }

}
