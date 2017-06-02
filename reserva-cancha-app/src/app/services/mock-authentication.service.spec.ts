import { TestBed, inject } from '@angular/core/testing';

import { MockAuthenticationService } from './mock-authentication.service';

describe('MockAuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockAuthenticationService]
    });
  });

  it('should ...', inject([MockAuthenticationService], (service: MockAuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
