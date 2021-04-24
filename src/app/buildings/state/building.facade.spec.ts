import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';

import { BuildingStorage } from '@app/buildings/storage';
import { readFirst } from '@app/core/store/utils';

import { BuildingEffects } from './building.effects';
import { BuildingFacade } from './building.facade';
import { BUILDING_FEATURE_KEY, reducer } from './building.reducer';
import { BUILDINGS_STUB } from './building.stub';

describe('BuildingFacade', () => {
  let facade: BuildingFacade;

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(BUILDING_FEATURE_KEY, reducer), EffectsModule.forFeature([BuildingEffects])],
        providers: [
          BuildingFacade,
          {
            provide: BuildingStorage,
            useValue: {
              get: jest.fn(() => of(BUILDINGS_STUB)),
            } as Partial<BuildingStorage>,
          },
        ],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}

      TestBed.configureTestingModule({ imports: [RootModule] });

      facade = TestBed.inject(BuildingFacade);
    });

    it('loadBuildings() should load buildings', async (done) => {
      try {
        facade.load();

        const building = await readFirst(facade.buildings$);
        expect(building?.length).toBe(BUILDINGS_STUB.length);

        done();
      } catch (error) {
        done.fail(error);
      }
    });
  });
});
