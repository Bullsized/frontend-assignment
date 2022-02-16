import { Component } from '@angular/core';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { getTaskFormGroup } from '../shared/task-form-group/form.group';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { TasksService } from '../../../core/services/tasks.service';
import { TasksAdapter } from '../../../core/adapters/tasks.adapter';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['../task.component.scss']
})
export class TaskAddComponent {
  faChevronCircleLeft = faChevronCircleLeft;
  form = getTaskFormGroup();

  constructor(
    private tasksService: TasksService,
    private tasksAdapter: TasksAdapter,
    private router: Router
  ) {
  }

  onAddSubmit(): void {
    this.form.controls['title'].markAsTouched();

    if (this.form.invalid) {
      return;
    }

    const taskRequestBody = this.tasksAdapter.formGroupToTaskRequest(this.form);

    if (taskRequestBody) {
      this.tasksService.createTask(taskRequestBody)
        .subscribe(
          () => this.onSuccess(),
          (err) => this.onError(err)
        );
    }
  }

  onSuccess() {
    this.router.navigate(['/tasks']);
  }

  onError(err: HttpErrorResponse) {
    alert(`Whops, seems like there is no wind in the Sails...\nMaybe check the console?`)
    console.error(err.message);
  }
}
