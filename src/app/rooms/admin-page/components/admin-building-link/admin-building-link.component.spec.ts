import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIcon } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponents, MockPipes } from 'ng-mocks';

import { NavPathPipe } from '@app/core/navigation/shared';

import { AdminBuildingLinkComponent } from './admin-building-link.component';

describe('AdminBuildingLinkComponent', () => {
  let component: AdminBuildingLinkComponent;
  let fixture: ComponentFixture<AdminBuildingLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AdminBuildingLinkComponent, MockComponents(MatIcon), MockPipes(NavPathPipe)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBuildingLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
