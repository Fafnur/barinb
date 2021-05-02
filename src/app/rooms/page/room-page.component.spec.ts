import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';
import { of } from 'rxjs';

import { RoomService } from '@app/rooms/service';

import { RoomPageComponent } from './room-page.component';

describe('BookingPageComponent', () => {
  let component: RoomPageComponent;
  let fixture: ComponentFixture<RoomPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomPageComponent, MockComponents()],
      providers: [
        {
          provide: RoomService,
          useValue: {
            rooms$: of([]),
          } as Partial<RoomService>,
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
