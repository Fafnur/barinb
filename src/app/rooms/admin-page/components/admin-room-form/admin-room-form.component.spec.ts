import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MockComponents } from 'ng-mocks';

import { FormsSharedModule } from '@app/core/forms/shared';
import { RowModule } from '@app/ui/row';

import { AdminRoomFormComponent } from './admin-room-form.component';
import { AdminRoomAmenitiesComponent } from './components/admin-room-amenities/admin-room-amenities.component';
import { AdminRoomBathroomsComponent } from './components/admin-room-bathrooms/admin-room-bathrooms.component';
import { AdminRoomBedroomsComponent } from './components/admin-room-bedrooms/admin-room-bedrooms.component';
import { AdminRoomBedsComponent } from './components/admin-room-beds/admin-room-beds.component';
import { AdminRoomBuildingComponent } from './components/admin-room-building/admin-room-building.component';
import { AdminRoomDescriptionComponent } from './components/admin-room-description/admin-room-description.component';
import { AdminRoomGuestsComponent } from './components/admin-room-guests/admin-room-guests.component';
import { AdminRoomPersonComponent } from './components/admin-room-person/admin-room-person.component';
import { AdminRoomPhotosComponent } from './components/admin-room-photos/admin-room-photos.component';
import { AdminRoomPriceComponent } from './components/admin-room-price/admin-room-price.component';

describe('AdminRoomFormComponent', () => {
  let component: AdminRoomFormComponent;
  let fixture: ComponentFixture<AdminRoomFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatButtonModule, FormsSharedModule, RowModule, ReactiveFormsModule],
      declarations: [
        AdminRoomFormComponent,
        MockComponents(
          AdminRoomPersonComponent,
          AdminRoomBuildingComponent,
          AdminRoomPriceComponent,
          AdminRoomGuestsComponent,
          AdminRoomBedroomsComponent,
          AdminRoomBedsComponent,
          AdminRoomBathroomsComponent,
          AdminRoomAmenitiesComponent,
          AdminRoomPhotosComponent,
          AdminRoomDescriptionComponent
        ),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
