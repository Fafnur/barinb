import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MockModule } from 'ng-mocks';
import { of } from 'rxjs';

import { PersonService } from '@app/persons/service';
import { PersonSharedModule } from '@app/persons/shared';

import { AdminRoomPersonComponent } from './admin-room-person.component';

describe('AdminRoomPersonComponent', () => {
  let component: AdminRoomPersonComponent;
  let fixture: ComponentFixture<AdminRoomPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatInputModule, MatSelectModule, ReactiveFormsModule, MockModule(PersonSharedModule)],
      declarations: [AdminRoomPersonComponent],
      providers: [
        {
          provide: PersonService,
          useValue: {
            persons$: of(),
          } as Partial<PersonService>,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
