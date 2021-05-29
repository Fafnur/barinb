import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MockModule } from 'ng-mocks';

import { FormsSharedModule } from '@app/core/forms/shared';
import { RowModule } from '@app/ui/row';

import { AdminBuildingFormComponent } from './admin-building-form.component';
import { AdminBuildingAddressModule } from './components/admin-building-address/admin-building-address.module';
import { AdminBuildingCityModule } from './components/admin-building-city/admin-building-city.module';
import { AdminBuildingLatModule } from './components/admin-building-lat/admin-building-lat.module';
import { AdminBuildingLngModule } from './components/admin-building-lng/admin-building-lng.module';
import { AdminBuildingNameModule } from './components/admin-building-name/admin-building-name.module';
import { AdminBuildingPersonModule } from './components/admin-building-person/admin-building-person.module';
import { AdminBuildingRoomsModule } from './components/admin-building-rooms/admin-building-rooms.module';

describe('AdminBuildingFormComponent', () => {
  let component: AdminBuildingFormComponent;
  let fixture: ComponentFixture<AdminBuildingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatButtonModule,
        FormsSharedModule,
        RowModule,
        ReactiveFormsModule,
        MockModule(AdminBuildingCityModule),
        MockModule(AdminBuildingAddressModule),
        MockModule(AdminBuildingLatModule),
        MockModule(AdminBuildingNameModule),
        MockModule(AdminBuildingLngModule),
        MockModule(AdminBuildingRoomsModule),
        MockModule(AdminBuildingPersonModule),
      ],
      declarations: [AdminBuildingFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBuildingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
