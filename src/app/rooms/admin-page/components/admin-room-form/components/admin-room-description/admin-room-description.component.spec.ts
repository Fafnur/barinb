import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoomDescriptionComponent } from './admin-room-description.component';

describe('AdminRoomDescriptionComponent', () => {
  let component: AdminRoomDescriptionComponent;
  let fixture: ComponentFixture<AdminRoomDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRoomDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
