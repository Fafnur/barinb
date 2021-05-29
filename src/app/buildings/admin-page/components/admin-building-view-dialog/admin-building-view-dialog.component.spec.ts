import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MockPipes } from 'ng-mocks';

import { AdminViewSharedModule } from '@app/admin/view/shared';
import { PersonFullNamePipe, PersonSharedModule } from '@app/persons/shared';
import { RoomAmenities } from '@app/rooms/common';
import { RoomExtended } from '@app/rooms/manager';

import { AdminBuildingViewDialogComponent } from './admin-building-view-dialog.component';

describe('AdminBuildingViewDialogComponent', () => {
  let component: AdminBuildingViewDialogComponent;
  let fixture: ComponentFixture<AdminBuildingViewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, MatButtonModule, PersonSharedModule, AdminViewSharedModule],
      declarations: [AdminBuildingViewDialogComponent, MockPipes(PersonFullNamePipe)],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: { amenities: [RoomAmenities.Tv], buildingExtended: { personExtended: {} } } as RoomExtended,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBuildingViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
