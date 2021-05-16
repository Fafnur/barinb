import { EntityState } from '@ngrx/entity';
import { Dictionary } from '@ngrx/entity/src/models';
import { Store } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';

import { Entity } from '@app/core/common';

export function createStore<S = Record<string, any>, P = Record<string, any>>(key: string, initialState: S, params: Partial<S> = {}): P {
  return {
    [key]: { ...initialState, ...params },
  } as any;
}

export function createState<S = Record<string, any>>(initialState: S, params: Partial<S> = {}): S {
  return { ...initialState, ...params };
}

export function createEntityState<S extends Entity = any>(data: S[]): EntityState<S> {
  const ids: number[] = [];
  const entities: Dictionary<S> = {};

  for (const item of data) {
    ids.push(item.id);
    entities[item.id] = item;
  }

  return {
    ids,
    entities,
  };
}

export function setMockStore<S = Record<string, any>>(store: Store, key: string, initialState: S, params: Partial<S> = {}): void {
  (store as MockStore).setState(createStore(key, initialState, params));
}
