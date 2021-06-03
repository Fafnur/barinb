import { TestBed, waitForAsync } from '@angular/core/testing';
import { hot } from 'jasmine-marbles';
import { ReplaySubject } from 'rxjs';
import { anything, mock, when } from 'ts-mockito';

import { Building } from '@app/buildings/common';
import { BUILDING_STUB, BuildingFacade, BUILDINGS_STUB } from '@app/buildings/state';
import { providerOf } from '@app/core/testing';

import { BuildingService } from './building.service';

describe('BuildingService', () => {
  let service: BuildingService;
  let buildingFacadeMock: BuildingFacade;
  let buildings$: ReplaySubject<Building[]>;
  let building$: ReplaySubject<Building>;
  let buildingsByPerson$: ReplaySubject<Building[]>;

  beforeEach(() => {
    buildingFacadeMock = mock(BuildingFacade);
    buildings$ = new ReplaySubject<Building[]>(1);
    building$ = new ReplaySubject<Building>(1);
    buildingsByPerson$ = new ReplaySubject<Building[]>(1);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [BuildingService, providerOf(BuildingFacade, buildingFacadeMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    when(buildingFacadeMock.buildings$).thenReturn(buildings$);
    when(buildingFacadeMock.building$(anything())).thenReturn(building$);
    when(buildingFacadeMock.buildingsByPerson$(anything())).thenReturn(buildingsByPerson$);
    // after init all props, get service
    service = TestBed.inject(BuildingService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should set buildings', () => {
    buildings$.next(BUILDINGS_STUB);

    const expected$ = hot('a', {
      a: BUILDINGS_STUB,
    });

    expect(service.buildings$).toBeObservable(expected$);
  });

  it('should set building', () => {
    building$.next(BUILDING_STUB);

    const expected$ = hot('a', {
      a: BUILDING_STUB,
    });

    expect(service.building$(anything())).toBeObservable(expected$);
  });

  it('should set buildingsByPerson', () => {
    buildingsByPerson$.next(BUILDINGS_STUB);

    const expected$ = hot('a', {
      a: BUILDINGS_STUB,
    });

    expect(service.buildingsByPerson$(anything())).toBeObservable(expected$);
  });
});
