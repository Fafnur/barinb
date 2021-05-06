import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MockComponents } from 'ng-mocks';

import { RoomHeaderComponent } from './room-header.component';

describe('RoomHeaderComponent', () => {
  let component: RoomHeaderComponent;
  let fixture: ComponentFixture<RoomHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomHeaderComponent, MockComponents(MatIcon, MatButton)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
