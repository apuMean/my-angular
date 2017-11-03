import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileImageUploadComponent } from './profile-image-upload.component';

describe('ProfileImageUploadComponent', () => {
  let component: ProfileImageUploadComponent;
  let fixture: ComponentFixture<ProfileImageUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileImageUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
