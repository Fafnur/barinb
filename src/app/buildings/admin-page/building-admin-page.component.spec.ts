import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponents } from 'ng-mocks';
import { of } from 'rxjs';

import { BuildingManager } from '@app/buildings/manager';

import { BuildingAdminPageComponent } from './building-admin-page.component';
import { AdminBuildingsActionsComponent } from './components/admin-buildings-actions/admin-buildings-actions.component';
import { AdminBuildingsListComponent } from './components/admin-buildings-list/admin-buildings-list.component';
import { AdminBuildingsTableComponent } from './components/admin-buildings-table/admin-buildings-table.component';

describe('BuildingAdminPageComponent', () => {
  let component: BuildingAdminPageComponent;
  let fixture: ComponentFixture<BuildingAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        BuildingAdminPageComponent,
        MockComponents(AdminBuildingsActionsComponent, AdminBuildingsTableComponent, AdminBuildingsListComponent),
      ],
      providers: [
        {
          provide: BuildingManager,
          useValue: {
            buildingsExtended$: of(),
          } as Partial<BuildingManager>,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
