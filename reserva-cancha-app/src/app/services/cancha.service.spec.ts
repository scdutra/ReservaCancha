import { TestBed, inject } from '@angular/core/testing';

import { CanchaService } from './cancha.service';

describe('CanchaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanchaService]
    });
  });

  it('should ...', inject([CanchaService], (service: CanchaService) => {
    expect(service).toBeTruthy();
  }));
});
