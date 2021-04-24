import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { BuildingFacade } from '@app/buildings/state';

import { BuildingService } from './building.service';

describe('BuildingService', () => {
  let service: BuildingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        BuildingService,
        {
          provide: BuildingFacade,
          useValue: {
            buildings$: of(),
          } as Partial<BuildingFacade>,
        },
      ],
    }).compileComponents();

    service = TestBed.inject(BuildingService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
