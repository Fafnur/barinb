import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MockModule } from 'ng-mocks';
import { of } from 'rxjs';

import { PersonSharedModule } from '@app/persons/shared';
import { RoomService } from '@app/rooms/service';

import { AdminBuildingRoomsComponent } from './admin-building-rooms.component';

describe('AdminBuildingRoomsComponent', () => {
  let component: AdminBuildingRoomsComponent;
  let fixture: ComponentFixture<AdminBuildingRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatInputModule, MatSelectModule, ReactiveFormsModule, MockModule(PersonSharedModule)],
      declarations: [AdminBuildingRoomsComponent],
      providers: [
        {
          provide: RoomService,
          useValue: {
            rooms$: of(),
          } as Partial<RoomService>,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBuildingRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
