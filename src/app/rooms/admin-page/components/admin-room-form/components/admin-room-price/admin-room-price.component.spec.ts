import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoomPriceComponent } from './admin-room-price.component';

describe('AdminRoomPriceComponent', () => {
  let component: AdminRoomPriceComponent;
  let fixture: ComponentFixture<AdminRoomPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRoomPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
