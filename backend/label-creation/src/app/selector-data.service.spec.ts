import { TestBed, inject } from '@angular/core/testing';

import { SelectorDataService } from './selector-data.service';

describe('SelectorDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectorDataService]
    });
  });

  it('should be created', inject([SelectorDataService], (service: SelectorDataService) => {
    expect(service).toBeTruthy();
  }));
});
