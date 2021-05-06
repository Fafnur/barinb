import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDescriptionComponent } from './room-description.component';

describe('RoomDescriptionComponent', () => {
  let component: RoomDescriptionComponent;
  let fixture: ComponentFixture<RoomDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
