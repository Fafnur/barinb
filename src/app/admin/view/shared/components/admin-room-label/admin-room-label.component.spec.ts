import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoomLabelComponent } from './admin-room-label.component';

describe('AdminRoomLabelComponent', () => {
  let component: AdminRoomLabelComponent;
  let fixture: ComponentFixture<AdminRoomLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminRoomLabelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
