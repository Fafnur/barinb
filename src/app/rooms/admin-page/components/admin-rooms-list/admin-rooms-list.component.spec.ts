import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { AdminRoomCardModule } from '../admin-room-card/admin-room-card.module';
import { AdminRoomsListComponent } from './admin-rooms-list.component';

describe('AdminRoomsListComponent', () => {
  let component: AdminRoomsListComponent;
  let fixture: ComponentFixture<AdminRoomsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockModule(AdminRoomCardModule)],
      declarations: [AdminRoomsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
