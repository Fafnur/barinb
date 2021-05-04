import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { RoomManager } from '@app/rooms/manager';

import { RoomPageComponent } from './room-page.component';

describe('BookingPageComponent', () => {
  let component: RoomPageComponent;
  let fixture: ComponentFixture<RoomPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [RoomPageComponent],
      providers: [
        {
          provide: RoomManager,
          useValue: {
            roomExtended$: jest.fn(() => of()),
          } as Partial<RoomManager>,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
