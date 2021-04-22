import { Store } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';

/**
 * Create feature state (store)
 *
 * @param key State feature key
 * @param initialState Initial state
 * @param params Extend initial params
 */
export function createStore<S = Record<string, any>, P = Record<string, any>>(key: string, initialState: S, params: Partial<S> = {}): P {
  return {
    [key]: { ...initialState, ...params },
  } as any;
}

/**
 * Create state
 *
 * @param initialState Initial state
 * @param params Extend initial params
 */
export function createState<S = Record<string, any>>(initialState: S, params: Partial<S> = {}): S {
  return { ...initialState, ...params };
}

/**
 * Set mock state
 *
 * @param store Mock store
 * @param key State feature key
 * @param initialState Initial state
 * @param params Extend initial params
 */
export function setMockStore<S = Record<string, any>>(store: Store, key: string, initialState: S, params: Partial<S> = {}): void {
  (store as MockStore).setState(createStore(key, initialState, params));
}
