import { TestBed } from '@angular/core/testing';

import { HttpTodosService } from './http-todos.service';

describe('HttpTodosService', () => {
  let service: HttpTodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpTodosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
