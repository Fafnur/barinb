import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MockModule } from 'ng-mocks';

import { RoomManager } from '@app/rooms/manager';

import { AdminRoomClearDialogModule } from '../admin-room-clear-dialog/admin-room-clear-dialog.module';
import { AdminRoomCreateDialogModule } from '../admin-room-create-dialog/admin-room-create-dialog.module';
import { AdminRoomsActionsComponent } from './admin-rooms-actions.component';

describe('AdminRoomsActionsComponent', () => {
  let component: AdminRoomsActionsComponent;
  let fixture: ComponentFixture<AdminRoomsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MockModule(AdminRoomClearDialogModule),
        MockModule(AdminRoomCreateDialogModule),
      ],
      declarations: [AdminRoomsActionsComponent],
      providers: [
        {
          provide: RoomManager,
          useValue: {
            clear: jest.fn(),
          } as Partial<RoomManager>,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
