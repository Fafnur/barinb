import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomPropsComponent } from './room-props.component';

describe('RoomPropsComponent', () => {
  let component: RoomPropsComponent;
  let fixture: ComponentFixture<RoomPropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomPropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
