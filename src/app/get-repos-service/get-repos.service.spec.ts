import { TestBed } from '@angular/core/testing';

import { GetReposService } from './get-repos.service';

describe('GetReposService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetReposService = TestBed.get(GetReposService);
    expect(service).toBeTruthy();
  });
});
