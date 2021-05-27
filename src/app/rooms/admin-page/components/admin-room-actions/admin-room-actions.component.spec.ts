import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { RoomManager } from '@app/rooms/manager';

import { AdminRoomActionsComponent } from './admin-room-actions.component';

describe('AdminRoomActionsComponent', () => {
  let component: AdminRoomActionsComponent;
  let fixture: ComponentFixture<AdminRoomActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatButtonToggleModule, MatButtonModule, MatIconModule, MatDialogModule],
      declarations: [AdminRoomActionsComponent],
      providers: [
        {
          provide: RoomManager,
          useValue: {
            removeRoom: jest.fn(),
          } as Partial<RoomManager>,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
