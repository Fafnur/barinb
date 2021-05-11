import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoomBathroomsComponent } from './admin-room-bathrooms.component';

describe('AdminRoomBathroomsComponent', () => {
  let component: AdminRoomBathroomsComponent;
  let fixture: ComponentFixture<AdminRoomBathroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRoomBathroomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomBathroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
