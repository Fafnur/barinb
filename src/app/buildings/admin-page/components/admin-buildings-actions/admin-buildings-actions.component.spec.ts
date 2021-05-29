import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MockModule } from 'ng-mocks';

import { BuildingManager } from '@app/buildings/manager';

import { AdminBuildingClearDialogModule } from '../admin-building-clear-dialog/admin-building-clear-dialog.module';
import { AdminBuildingCreateDialogModule } from '../admin-building-create-dialog/admin-building-create-dialog.module';
import { AdminBuildingsActionsComponent } from './admin-buildings-actions.component';

describe('AdminRoomsActionsComponent', () => {
  let component: AdminBuildingsActionsComponent;
  let fixture: ComponentFixture<AdminBuildingsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MockModule(AdminBuildingClearDialogModule),
        MockModule(AdminBuildingCreateDialogModule),
      ],
      declarations: [AdminBuildingsActionsComponent],
      providers: [
        {
          provide: BuildingManager,
          useValue: {
            clear: jest.fn(),
          } as Partial<BuildingManager>,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBuildingsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
