import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskEditComponent } from './task-edit.component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskFormComponent } from '../shared/task-form/task-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('TaskEditComponent', () => {
  let component: TaskEditComponent;
  let fixture: ComponentFixture<TaskEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeTestingModule, ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [TaskEditComponent, TaskFormComponent],
      providers: [
        {
          provide: 'apiUrl',
          useValue: ''
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
