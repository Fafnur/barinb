import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockPipes } from 'ng-mocks';

import { NumeralToWordPipe } from '@app/core/numerals/shared';

import { RoomPropsComponent } from './room-props.component';

describe('RoomPropsComponent', () => {
  let component: RoomPropsComponent;
  let fixture: ComponentFixture<RoomPropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomPropsComponent, MockPipes(NumeralToWordPipe)],
    }).compileComponents();
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
