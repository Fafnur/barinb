import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MockModule } from 'ng-mocks';
import { of } from 'rxjs';

import { BuildingService } from '@app/buildings/service';
import { PersonSharedModule } from '@app/persons/shared';

import { AdminPersonBuildingsComponent } from './admin-person-buildings.component';

describe('AdminPersonBuildingsComponent', () => {
  let component: AdminPersonBuildingsComponent;
  let fixture: ComponentFixture<AdminPersonBuildingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatInputModule, MatSelectModule, ReactiveFormsModule, MockModule(PersonSharedModule)],
      declarations: [AdminPersonBuildingsComponent],
      providers: [
        {
          provide: BuildingService,
          useValue: {
            buildings$: of(),
          } as Partial<BuildingService>,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPersonBuildingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
