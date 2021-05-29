import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MockModule } from 'ng-mocks';

import { AdminBuildingLinkModule, AdminPersonLinkModule } from '@app/admin/links/shared';
import { CarouselModule } from '@app/ui/carousel';

import { AdminRoomActionsModule } from '../admin-room-actions/admin-room-actions.module';
import { AdminRoomsTableComponent } from './admin-rooms-table.component';

describe('AdminRoomsTableComponent', () => {
  let component: AdminRoomsTableComponent;
  let fixture: ComponentFixture<AdminRoomsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MockModule(AdminRoomActionsModule),
        MockModule(AdminBuildingLinkModule),
        MockModule(AdminPersonLinkModule),
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MockModule(CarouselModule),
      ],
      declarations: [AdminRoomsTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
