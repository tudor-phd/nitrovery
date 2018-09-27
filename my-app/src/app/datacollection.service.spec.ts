import { TestBed, inject } from '@angular/core/testing';

import { DatacollectionService } from './datacollection.service';

describe('DatacollectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatacollectionService]
    });
  });

  it('should be created', inject([DatacollectionService], (service: DatacollectionService) => {
    expect(service).toBeTruthy();
  }));
});
