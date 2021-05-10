import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockPipes } from 'ng-mocks';

import { NavPathPipe } from '@app/core/navigation/shared';

import { ErrorLinksComponent } from './error-links.component';

describe('ErrorLinksComponent', () => {
  let component: ErrorLinksComponent;
  let fixture: ComponentFixture<ErrorLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ErrorLinksComponent, MockPipes(NavPathPipe)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
