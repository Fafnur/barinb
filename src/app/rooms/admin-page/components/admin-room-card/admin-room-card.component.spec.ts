import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { AdminBuildingLinkModule, AdminPersonLinkModule } from '@app/admin/links/shared';
import { NavigationSharedModule } from '@app/core/navigation/shared';
import { PersonSharedModule } from '@app/persons/shared';
import { CarouselModule } from '@app/ui/carousel';

import { AdminRoomActionsModule } from '../admin-room-actions/admin-room-actions.module';
import { AdminRoomCardComponent } from './admin-room-card.component';

describe('AdminRoomCardComponent', () => {
  let component: AdminRoomCardComponent;
  let fixture: ComponentFixture<AdminRoomCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MockModule(AdminRoomActionsModule),
        MockModule(AdminBuildingLinkModule),
        MockModule(AdminPersonLinkModule),
        MockModule(CarouselModule),
        MockModule(PersonSharedModule),
        MockModule(NavigationSharedModule),
      ],
      declarations: [AdminRoomCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomCardComponent);
    component = fixture.componentInstance;
    component.room = { buildingExtended: { personExtended: {} } } as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
