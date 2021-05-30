import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MockModule } from 'ng-mocks';

import { CarouselModule } from '@app/ui/carousel';

import { AdminPersonActionsModule } from '../admin-person-actions/admin-person-actions.module';
import { AdminPersonsTableComponent } from './admin-persons-table.component';

describe('AdminPersonsTableComponent', () => {
  let component: AdminPersonsTableComponent;
  let fixture: ComponentFixture<AdminPersonsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockModule(AdminPersonActionsModule), MatTableModule, MatButtonModule, MatIconModule, MockModule(CarouselModule)],
      declarations: [AdminPersonsTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPersonsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
