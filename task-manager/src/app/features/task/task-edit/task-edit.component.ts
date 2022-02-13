import { Component, OnInit } from '@angular/core';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { getTaskFormGroup } from '../shared/task-form-group/form.group';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['../task.component.scss']
})
export class TaskEditComponent implements OnInit {
  readonly id: string = this.activatedRoute.snapshot.params.id;

  faChevronCircleLeft = faChevronCircleLeft;
  form = getTaskFormGroup();

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
  }

  onEditSubmit() {
  }
}
