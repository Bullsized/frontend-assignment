import { Component, OnInit } from '@angular/core';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { getTaskFormGroup } from '../shared/task-form-group/form.group';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../../core/services/tasks.service';
import { TasksAdapter } from '../../../core/adapters/tasks.adapter';
import { HttpErrorResponse } from '@angular/common/http';

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
    private activatedRoute: ActivatedRoute,
    private tasksService: TasksService,
    private tasksAdapter: TasksAdapter,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loadTask();
  }

  onEditSubmit() {
    this.form.controls['title'].markAsTouched();

    if (this.form.invalid) {
      return;
    }

    const taskRequestBody = this.tasksAdapter.formGroupToTaskRequest(this.form);

    if (taskRequestBody && this.id) {
      this.tasksService
        .editTask(taskRequestBody, this.id)
        .subscribe(
          () => this.onSuccess(),
          (err) => this.onError(err)
        )
    }
  }

  onSuccess() {
    this.router.navigate(['/tasks']);
  }

  onError(err: HttpErrorResponse) {
    alert(`Whops, seems like there is no wind in the Sails...\nMaybe check the console?`)
    console.error(err.message);
  }

  private loadTask(): void {
    if (!this.id) {
      return;
    }

    this.tasksService
      .getTaskById(this.id)
      .subscribe(task => {
        if (!this.form) {
          return;
        }

        this.tasksAdapter.taskToFormGroupData(task, this.form);
      })
  }
}
