import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponents } from 'ng-mocks';

import { PersonAdminPageComponent } from './person-admin-page.component';

describe('PersonAdminPageComponent', () => {
  let component: PersonAdminPageComponent;
  let fixture: ComponentFixture<PersonAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PersonAdminPageComponent, MockComponents()],
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
