import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { of } from 'rxjs';

import { RoomManager } from '@app/rooms/manager';

import { AdminRoomsActionsModule } from './components/admin-rooms-actions/admin-rooms-actions.module';
import { AdminRoomsListModule } from './components/admin-rooms-list/admin-rooms-list.module';
import { AdminRoomsTableModule } from './components/admin-rooms-table/admin-rooms-table.module';
import { RoomAdminPageComponent } from './room-admin-page.component';

describe('RoomAdminPageComponent', () => {
  let component: RoomAdminPageComponent;
  let fixture: ComponentFixture<RoomAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MockModule(AdminRoomsActionsModule),
        MockModule(AdminRoomsTableModule),
        MockModule(AdminRoomsListModule),
      ],
      declarations: [RoomAdminPageComponent],
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
