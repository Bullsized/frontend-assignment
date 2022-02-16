import { Component, OnInit } from '@angular/core';
import {
  faPlusCircle,
  faCheckCircle,
  faTimesCircle,
  faInfoCircle,
  faDotCircle
} from '@fortawesome/free-solid-svg-icons';
import { TasksService } from '../../../core/services/tasks.service';
import { Task } from '../../../core/interfaces/task';
import { TasksAdapter } from '../../../core/adapters/tasks.adapter';

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
  faDotCircle = faDotCircle;

  tasks: Task[] = [];

  constructor(
    private tasksService: TasksService,
    private tasksAdapter: TasksAdapter
  ) {
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  private loadTasks(): void {
    this.tasksService.getTasks().subscribe(data => {
      this.tasks = data;
    })
  }

  deleteTask(task: Task) {
    if (confirm('Are you sure you want to delete this task?') && task.id) {
      this.tasksService.deleteTask(task.id).subscribe(
        () => this.loadTasks(),
        (err) => console.log(err)
      );
    }
  }

  completeTask(task: Task) {
    const clonedTask = task;

    clonedTask.isComplete = !task.isComplete;

    const taskRequestBody = this.tasksAdapter.taskToTaskRequest(clonedTask);

    if (taskRequestBody && task.id) {
      this.tasksService.editTask(clonedTask, task.id).subscribe(
        () => this.loadTasks(),
        (err) => console.log(err))
    }
  }
}
