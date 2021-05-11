import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoomPhotosComponent } from './admin-room-photos.component';

describe('AdminRoomPhotosComponent', () => {
  let component: AdminRoomPhotosComponent;
  let fixture: ComponentFixture<AdminRoomPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRoomPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
