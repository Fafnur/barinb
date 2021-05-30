import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MockModule } from 'ng-mocks';

import { BuildingManager } from '@app/buildings/manager';

import { AdminPersonClearDialogModule } from '../admin-person-clear-dialog/admin-person-clear-dialog.module';
import { AdminPersonCreateDialogModule } from '../admin-person-create-dialog/admin-person-create-dialog.module';
import { AdminPersonsActionsComponent } from './admin-persons-actions.component';

describe('AdminPersonsActionsComponent', () => {
  let component: AdminPersonsActionsComponent;
  let fixture: ComponentFixture<AdminPersonsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MockModule(AdminPersonClearDialogModule),
        MockModule(AdminPersonCreateDialogModule),
      ],
      declarations: [AdminPersonsActionsComponent],
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
    fixture = TestBed.createComponent(AdminPersonsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
