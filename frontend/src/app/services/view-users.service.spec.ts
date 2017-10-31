import { TestBed, inject } from '@angular/core/testing';

import { ViewUsersService } from './view-users.service';

describe('ViewUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewUsersService]
    });
  });

  it('should be created', inject([ViewUsersService], (service: ViewUsersService) => {
    expect(service).toBeTruthy();
  }));
});
