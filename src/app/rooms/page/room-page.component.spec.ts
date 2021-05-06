import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponents } from 'ng-mocks';
import { of } from 'rxjs';

import { RoomManager } from '@app/rooms/manager';
import { ContainerComponent } from '@app/ui/container';

import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { RoomFeaturesComponent } from './components/room-features/room-features.component';
import { RoomHeaderComponent } from './components/room-header/room-header.component';
import { RoomPersonComponent } from './components/room-person/room-person.component';
import { RoomPhotoComponent } from './components/room-photo/room-photo.component';
import { RoomPropsComponent } from './components/room-props/room-props.component';
import { RoomPageComponent } from './room-page.component';

describe('BookingPageComponent', () => {
  let component: RoomPageComponent;
  let fixture: ComponentFixture<RoomPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        RoomPageComponent,
        MockComponents(
          MatIcon,
          MatButton,
          ContainerComponent,
          RoomPhotoComponent,
          RoomHeaderComponent,
          RoomDetailsComponent,
          RoomPersonComponent,
          RoomFeaturesComponent,
          RoomPropsComponent
        ),
      ],
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
