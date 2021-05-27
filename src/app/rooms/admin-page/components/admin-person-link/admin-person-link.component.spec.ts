import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIcon } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponents, MockPipes } from 'ng-mocks';

import { NavPathPipe } from '@app/core/navigation/shared';

import { AdminPersonLinkComponent } from './admin-person-link.component';

describe('AdminPersonLinkComponent', () => {
  let component: AdminPersonLinkComponent;
  let fixture: ComponentFixture<AdminPersonLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AdminPersonLinkComponent, MockComponents(MatIcon), MockPipes(NavPathPipe)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPersonLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
