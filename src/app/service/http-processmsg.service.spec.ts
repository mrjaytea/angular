import { TestBed } from '@angular/core/testing';

import { HttpProcessmsgService } from './http-processmsg.service';

describe('HttpProcessmsgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpProcessmsgService = TestBed.get(HttpProcessmsgService);
    expect(service).toBeTruthy();
  });
});
