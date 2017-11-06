import { TestBed, inject } from '@angular/core/testing';

import { SignupService } from './register.service';

describe('RegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignupService]
    });
  });

  it('should be created', inject([SignupService], (service: SignupService) => {
    expect(service).toBeTruthy();
  }));
});
