import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoogleMap } from '@angular/google-maps';
import { MockComponents } from 'ng-mocks';
import { of } from 'rxjs';

import { GoogleMapsService } from '@app/maps/services';
import { SpinnerComponent } from '@app/ui/spinner';

import { GoogleMapComponent } from './google-map.component';

describe('GoogleMapComponent', () => {
  let component: GoogleMapComponent;
  let fixture: ComponentFixture<GoogleMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoogleMapComponent, MockComponents(SpinnerComponent, GoogleMap)],
      providers: [
        {
          provide: GoogleMapsService,
          useValue: {
            load: jest.fn(() => of(true)),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
