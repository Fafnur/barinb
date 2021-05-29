import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { AdminBuildingCardModule } from '../admin-building-card/admin-building-card.module';
import { AdminBuildingsListComponent } from './admin-buildings-list.component';

describe('AdminBuildingsListComponent', () => {
  let component: AdminBuildingsListComponent;
  let fixture: ComponentFixture<AdminBuildingsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockModule(AdminBuildingCardModule)],
      declarations: [AdminBuildingsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBuildingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
