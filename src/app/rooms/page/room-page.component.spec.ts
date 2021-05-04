import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponents } from 'ng-mocks';
import { of } from 'rxjs';

import { RoomManager } from '@app/rooms/manager';
import { ContainerComponent } from '@app/ui/container';

import { RoomPhotosComponent } from './components/room-photos/room-photos.component';
import { RoomPageComponent } from './room-page.component';

describe('BookingPageComponent', () => {
  let component: RoomPageComponent;
  let fixture: ComponentFixture<RoomPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [RoomPageComponent, MockComponents(RoomPhotosComponent, MatIcon, MatButton, ContainerComponent)],
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
