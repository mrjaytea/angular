import { TestBed } from '@angular/core/testing';

import { QualiService } from './quali.service';

describe('QualiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QualiService = TestBed.get(QualiService);
    expect(service).toBeTruthy();
  });
});
