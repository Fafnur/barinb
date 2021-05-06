import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIcon } from '@angular/material/icon';
import { MockComponents } from 'ng-mocks';

import { RoomFeaturesComponent } from './room-features.component';

describe('RoomFeaturesComponent', () => {
  let component: RoomFeaturesComponent;
  let fixture: ComponentFixture<RoomFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomFeaturesComponent, MockComponents(MatIcon)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
