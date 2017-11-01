import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdduserComponent } from './dashboard-adduser.component';

describe('DashboardAdduserComponent', () => {
  let component: DashboardAdduserComponent;
  let fixture: ComponentFixture<DashboardAdduserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAdduserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAdduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
