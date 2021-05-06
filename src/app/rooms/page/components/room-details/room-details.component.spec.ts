import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIcon } from '@angular/material/icon';
import { MockComponents } from 'ng-mocks';

import { RoomDetailsComponent } from './room-details.component';

describe('RoomDetailsComponent', () => {
  let component: RoomDetailsComponent;
  let fixture: ComponentFixture<RoomDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomDetailsComponent, MockComponents(MatIcon)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
