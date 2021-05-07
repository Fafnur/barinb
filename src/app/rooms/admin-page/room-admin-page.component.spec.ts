import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponents } from 'ng-mocks';

import { RoomAdminPageComponent } from './room-admin-page.component';

describe('BookingPageComponent', () => {
  let component: RoomAdminPageComponent;
  let fixture: ComponentFixture<RoomAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [RoomAdminPageComponent, MockComponents()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
