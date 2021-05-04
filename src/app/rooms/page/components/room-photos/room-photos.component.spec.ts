import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomPhotosComponent } from './room-photos.component';

describe('RoomPhotosComponent', () => {
  let component: RoomPhotosComponent;
  let fixture: ComponentFixture<RoomPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
