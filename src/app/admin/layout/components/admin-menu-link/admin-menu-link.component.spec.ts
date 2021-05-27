import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockPipes } from 'ng-mocks';

import { NavPathPipe } from '@app/core/navigation/shared';

import { AdminMenuLinkComponent } from './admin-menu-link.component';

describe('AdminMenuLinkComponent', () => {
  let component: AdminMenuLinkComponent;
  let fixture: ComponentFixture<AdminMenuLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AdminMenuLinkComponent, MockPipes(NavPathPipe)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMenuLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});