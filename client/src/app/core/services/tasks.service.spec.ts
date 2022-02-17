import { TestBed } from '@angular/core/testing';
import { TasksService } from './tasks.service';
import { Task } from '../interfaces/task';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

const MOCK_TASK_ID = '42';

const MOCK_TASK: Task = {
  id: '666',
  title: 'Be quick or be dead',
  description: 'Released on 13 April 1992',
  isComplete: true
}

const MOCK_TASK_REQUEST: Task = {
  title: 'Fear of the dark',
  description: 'Written by Steve Harris, the band`s bass player and primary songwriter',
  isComplete: false
}

describe('TasksService', () => {
  const baseUrl = '/tasks';

  let service: TasksService;
  let httpCtrl: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: 'apiUrl',
          useValue: ''
        }
      ]
    });
    service = TestBed.inject(TasksService);
    httpCtrl = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpCtrl.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all tasks', (done) => {
    const MOCK_TASKS: Task[] = [
      {
        id: '123',
        title: 'Afraid to Shoot Strangers',
        description: '438 000 copies sold',
        isComplete: true
      },
      {
        id: '321',
        title: 'Weekend Warrior',
        description: 'From the Ninth studio album',
        isComplete: true
      },
    ];

    service.getTasks().subscribe((tasks) => {
      expect(tasks).toEqual(MOCK_TASKS);
      done();
    });

    const req = httpCtrl.expectOne(`${baseUrl}`);
    expect(req.request.method).toEqual('GET');

    req.flush(MOCK_TASKS);
  });

  it('should get detailed info for a single task', (done) => {
    service.getTaskById(MOCK_TASK_ID).subscribe((task) => {
      expect(task).toEqual(MOCK_TASK);
      done();
    });

    const req = httpCtrl.expectOne(`${baseUrl}/${MOCK_TASK_ID}`);
    expect(req.request.method).toEqual('GET');
    req.flush(MOCK_TASK);
  });

  it('should create a task', (done) => {
    service.createTask(MOCK_TASK_REQUEST).subscribe(() => {
      done();
    });

    const req = httpCtrl.expectOne(`${baseUrl}`);
    expect(req.request.method).toEqual('POST');
    req.flush(MOCK_TASK_REQUEST);
  });

  it('should edit the details for a known Person', (done) => {
    service.editTask(MOCK_TASK_REQUEST, MOCK_TASK_ID).subscribe(() => {
      done();
    });

    const req = httpCtrl.expectOne(`${baseUrl}/${MOCK_TASK_ID}`);
    expect(req.request.method).toEqual('PATCH');
    req.flush(MOCK_TASK_REQUEST);
  });

  it('should delete a Person', (done) => {
    service.deleteTask(MOCK_TASK_ID).subscribe(() => {
      done();
    });

    const req = httpCtrl.expectOne(`${baseUrl}/${MOCK_TASK_ID}`);
    expect(req.request.method).toEqual('DELETE');

    req.flush(MOCK_TASK_ID);
  });
});
