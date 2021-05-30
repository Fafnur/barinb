import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponents, MockModule } from 'ng-mocks';
import { of } from 'rxjs';

import { PersonManager } from '@app/persons/manager';

import { AdminPersonsActionsModule } from './components/admin-persons-actions/admin-persons-actions.module';
import { AdminPersonsListModule } from './components/admin-persons-list/admin-persons-list.module';
import { AdminPersonsTableModule } from './components/admin-persons-table/admin-persons-table.module';
import { PersonAdminPageComponent } from './person-admin-page.component';

describe('PersonAdminPageComponent', () => {
  let component: PersonAdminPageComponent;
  let fixture: ComponentFixture<PersonAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MockModule(AdminPersonsActionsModule),
        MockModule(AdminPersonsTableModule),
        MockModule(AdminPersonsListModule),
      ],
      declarations: [PersonAdminPageComponent, MockComponents()],
      providers: [
        {
          provide: PersonManager,
          useValue: {
            personsExtended$: of(),
          } as Partial<PersonManager>,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
