import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { AdminRoomClearDialogComponent } from './admin-room-clear-dialog.component';

describe('AdminRoomClearDialogComponent', () => {
  let component: AdminRoomClearDialogComponent;
  let fixture: ComponentFixture<AdminRoomClearDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatButtonModule, MatDialogModule],
      declarations: [AdminRoomClearDialogComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {
            close: jest.fn(),
          } as Partial<MatDialogRef<any>>,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomClearDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
