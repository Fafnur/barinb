import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { PersonManager } from '@app/persons/manager';

import { AdminPersonActionsComponent } from './admin-person-actions.component';

describe('AdminPersonActionsComponent', () => {
  let component: AdminPersonActionsComponent;
  let fixture: ComponentFixture<AdminPersonActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatButtonModule, MatIconModule, MatDialogModule],
      declarations: [AdminPersonActionsComponent],
      providers: [
        {
          provide: PersonManager,
          useValue: {
            removePerson: jest.fn(),
          } as Partial<PersonManager>,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPersonActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
