import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoomAmenitiesComponent } from './admin-room-amenities.component';

describe('AdminRoomAmenitiesComponent', () => {
  let component: AdminRoomAmenitiesComponent;
  let fixture: ComponentFixture<AdminRoomAmenitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRoomAmenitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
