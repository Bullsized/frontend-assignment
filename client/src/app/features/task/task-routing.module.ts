import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task.component';
import { NgModule } from '@angular/core';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

const routes: Routes = [
  { path: '', component: TaskComponent },
  { path: 'add', component: TaskAddComponent },
  { path: 'edit/:id', component: TaskEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {
}
