import { TestBed } from '@angular/core/testing';

import { ReturnExpiredService } from './return-expired.service';

describe('ReturnExpiredService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReturnExpiredService = TestBed.get(ReturnExpiredService);
    expect(service).toBeTruthy();
  });
});
