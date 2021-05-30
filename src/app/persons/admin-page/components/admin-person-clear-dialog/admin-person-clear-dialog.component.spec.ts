import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { AdminPersonClearDialogComponent } from './admin-person-clear-dialog.component';

describe('AdminPersonClearDialogComponent', () => {
  let component: AdminPersonClearDialogComponent;
  let fixture: ComponentFixture<AdminPersonClearDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatButtonModule, MatDialogModule],
      declarations: [AdminPersonClearDialogComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {
            close: jest.fn(),
          } as Partial<MatDialogRef<any>>,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPersonClearDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
