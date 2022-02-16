import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksAdapter {
  formGroupToTaskRequest(form: FormGroup): Task | undefined {
    if (!form) {
      return;
    }

    return {
      title: form.controls.title.value,
      description: form.controls.description.value,
      isComplete: !!form.controls.isComplete.value
    }
  }

  taskToFormGroupData(task: Task, form: FormGroup): void {
    if (!form) {
      return;
    }

    form.patchValue({
      title: task.title,
      description: task.description,
      isComplete: task.isComplete
    });
  }

  taskToTaskRequest(task: Task): Task {
    return {
      id: task.id,
      title: task.title,
      description: task.description,
      isComplete: task.isComplete
    }
  }
}
