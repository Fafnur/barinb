import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { AdminBuildingLinkModule, AdminPersonLinkModule } from '@app/admin/links/shared';
import { BuildingSharedModule } from '@app/buildings/shared';
import { NavigationSharedModule } from '@app/core/navigation/shared';
import { PersonSharedModule } from '@app/persons/shared';
import { CarouselModule } from '@app/ui/carousel';

import { AdminPersonActionsModule } from '../admin-person-actions/admin-person-actions.module';
import { AdminPersonCardComponent } from './admin-person-card.component';

describe('AdminBuildingCardComponent', () => {
  let component: AdminPersonCardComponent;
  let fixture: ComponentFixture<AdminPersonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MockModule(AdminPersonActionsModule),
        MockModule(AdminBuildingLinkModule),
        MockModule(AdminPersonLinkModule),
        MockModule(CarouselModule),
        MockModule(PersonSharedModule),
        MockModule(NavigationSharedModule),
        MockModule(BuildingSharedModule),
      ],
      declarations: [AdminPersonCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPersonCardComponent);
    component = fixture.componentInstance;
    component.person = { personExtended: { avatar: '/li.png' }, rooms: [] } as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
