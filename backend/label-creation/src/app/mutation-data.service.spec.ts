import { TestBed, inject } from '@angular/core/testing';

import { MutationDataService } from './mutation-data.service';

describe('MutationDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MutationDataService]
    });
  });

  it('should be created', inject([MutationDataService], (service: MutationDataService) => {
    expect(service).toBeTruthy();
  }));
});
