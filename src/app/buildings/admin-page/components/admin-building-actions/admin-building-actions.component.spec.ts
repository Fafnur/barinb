import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { BuildingManager } from '@app/buildings/manager';

import { AdminBuildingActionsComponent } from './admin-building-actions.component';

describe('AdminBuildingActionsComponent', () => {
  let component: AdminBuildingActionsComponent;
  let fixture: ComponentFixture<AdminBuildingActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatButtonModule, MatIconModule, MatDialogModule],
      declarations: [AdminBuildingActionsComponent],
      providers: [
        {
          provide: BuildingManager,
          useValue: {
            removeRoom: jest.fn(),
          } as Partial<BuildingManager>,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBuildingActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
