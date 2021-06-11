import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { RoomBookingDialogComponent } from './room-booking-dialog.component';
import { RoomBookingDialogComponentPo } from './room-booking-dialog.po';

describe('RoomBookingDialogComponent', () => {
  let pageObject: RoomBookingDialogComponentPo;
  let fixture: ComponentFixture<RoomBookingDialogComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatDialogModule],
        declarations: [RoomBookingDialogComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomBookingDialogComponent);
    pageObject = new RoomBookingDialogComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show dialog', () => {
    fixture.detectChanges();

    expect(pageObject.roomBookingTitleText).toBe('Подтверждение бронирования');
    expect(pageObject.roomBookingContentText).toBe(
      'Тут должна быть логика с бронированием выбранного варианта. Но так как это тествовое, данной реализации нет.'
    );
    expect(pageObject.roomBookingCloseText).toBe('Закрыть');
  });
});
