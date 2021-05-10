import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockPipes } from 'ng-mocks';

import { NavPathPipe } from '@app/core/navigation/shared';

import { ErrorLogoComponent } from './error-logo.component';

describe('ErrorLogoComponent', () => {
  let component: ErrorLogoComponent;
  let fixture: ComponentFixture<ErrorLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ErrorLogoComponent, MockPipes(NavPathPipe)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
