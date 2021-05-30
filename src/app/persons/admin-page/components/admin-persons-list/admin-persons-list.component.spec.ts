import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { AdminPersonCardModule } from '../admin-person-card/admin-person-card.module';
import { AdminPersonsListComponent } from './admin-persons-list.component';

describe('AdminPersonsListComponent', () => {
  let component: AdminPersonsListComponent;
  let fixture: ComponentFixture<AdminPersonsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockModule(AdminPersonCardModule)],
      declarations: [AdminPersonsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPersonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
