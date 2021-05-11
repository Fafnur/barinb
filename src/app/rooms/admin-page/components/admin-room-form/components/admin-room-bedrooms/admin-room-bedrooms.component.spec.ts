import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoomBedroomsComponent } from './admin-room-bedrooms.component';

describe('AdminRoomBedroomsComponent', () => {
  let component: AdminRoomBedroomsComponent;
  let fixture: ComponentFixture<AdminRoomBedroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRoomBedroomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomBedroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
