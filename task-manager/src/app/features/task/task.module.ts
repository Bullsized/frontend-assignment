import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { TaskRoutingModule } from './task-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskFormComponent } from './shared/task-form/task-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    TaskComponent,
    TaskListComponent,
    TaskAddComponent,
    TaskEditComponent,
    TaskFormComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    FontAwesomeModule
  ]
})
export class TaskModule {
}
