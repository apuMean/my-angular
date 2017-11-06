import { TestBed, inject } from '@angular/core/testing';

import { DashboardAdduserService } from './dashboard-adduser.service';

describe('DashboardAdduserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardAdduserService]
    });
  });

  it('should be created', inject([DashboardAdduserService], (service: DashboardAdduserService) => {
    expect(service).toBeTruthy();
  }));
});
