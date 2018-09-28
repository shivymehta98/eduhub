import { TestBed, inject } from '@angular/core/testing';

import { EduhubService } from './eduhub.service';

describe('EduhubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EduhubService]
    });
  });

  it('should be created', inject([EduhubService], (service: EduhubService) => {
    expect(service).toBeTruthy();
  }));
});
