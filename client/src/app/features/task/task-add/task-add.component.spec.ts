import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskAddComponent } from './task-add.component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskFormComponent } from '../shared/task-form/task-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('TaskAddComponent', () => {
  let component: TaskAddComponent;
  let fixture: ComponentFixture<TaskAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeTestingModule, ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [TaskAddComponent, TaskFormComponent],
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
    fixture = TestBed.createComponent(TaskAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
