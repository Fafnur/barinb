import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavigationPath } from '@app/core/navigation/common';

import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
  let service: NavigationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [NavigationService],
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(NavigationService);
  });

  it('should return getEnvironments', () => {
    expect(service.getRoute(NavigationPath.Rooms)).toEqual(['/', 'rooms']);
  });
});
