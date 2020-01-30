import { TestBed } from '@angular/core/testing';

import { GetpublisService } from './getpublis.service';

describe('GetpublisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetpublisService = TestBed.get(GetpublisService);
    expect(service).toBeTruthy();
  });
});
