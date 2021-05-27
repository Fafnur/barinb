import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponents } from 'ng-mocks';
import { of } from 'rxjs';

import { RoomManager } from '@app/rooms/manager';

import { AdminRoomsActionsComponent } from './components/admin-rooms-actions/admin-rooms-actions.component';
import { AdminRoomsTableComponent } from './components/admin-rooms-table/admin-rooms-table.component';
import { RoomAdminPageComponent } from './room-admin-page.component';

describe('RoomAdminPageComponent', () => {
  let component: RoomAdminPageComponent;
  let fixture: ComponentFixture<RoomAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [RoomAdminPageComponent, MockComponents(AdminRoomsActionsComponent, AdminRoomsTableComponent)],
      providers: [
        {
          provide: RoomManager,
          useValue: {
            roomsExtended$: of(),
          } as Partial<RoomManager>,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
