import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { AdminBuildingLinkModule, AdminPersonLinkModule } from '@app/admin/links/shared';
import { NavigationSharedModule } from '@app/core/navigation/shared';
import { PersonSharedModule } from '@app/persons/shared';
import { RoomSharedModule } from '@app/rooms/shared';
import { CarouselModule } from '@app/ui/carousel';

import { AdminBuildingActionsModule } from '../admin-building-actions/admin-building-actions.module';
import { AdminBuildingCardComponent } from './admin-building-card.component';

describe('AdminBuildingCardComponent', () => {
  let component: AdminBuildingCardComponent;
  let fixture: ComponentFixture<AdminBuildingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MockModule(AdminBuildingActionsModule),
        MockModule(AdminBuildingLinkModule),
        MockModule(AdminPersonLinkModule),
        MockModule(CarouselModule),
        MockModule(PersonSharedModule),
        MockModule(NavigationSharedModule),
        MockModule(RoomSharedModule),
      ],
      declarations: [AdminBuildingCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBuildingCardComponent);
    component = fixture.componentInstance;
    component.building = { personExtended: { avatar: '/li.png' }, rooms: [] } as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
