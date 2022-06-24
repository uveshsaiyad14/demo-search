import { TestBed } from '@angular/core/testing';

import { SaAngulerSearchService } from './sa-anguler-search.service';

describe('SaAngulerSearchService', () => {
  let service: SaAngulerSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaAngulerSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
