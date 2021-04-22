/**
 * IMPORTANT! I stole this implementation from Nx to avoid installing Nx.
 *
 * @see https://github.com/nrwl/nx/blob/c0ce1ce65e76786a7dbf04583b80a2528923148f/packages/angular/testing/src/testing-utils.ts
 */
import { Observable } from 'rxjs';
import { first, toArray } from 'rxjs/operators';

/**
 * @whatItDoes reads all the values from an observable and returns a promise
 * with an array of all values. This should be used in combination with async/await.
 *
 * ## Example
 *
 * ```typescript
 * const obs = of(1, 2, 3, 4);
 * const res = await readAll(obs)
 * expect(res).toEqual([1, 2, 3, 4]);
 * ```
 */
export function readAll<T>(o: Observable<T>): Promise<T[]> {
  return o.pipe(toArray()).toPromise();
}

/**
 * @whatItDoes reads the first value from an observable and returns a promise
 * with it. This should be used in combination with async/await.
 *
 * ## Example
 *
 * ```typescript
 * const obs = of(1, 2, 3, 4);
 * const res = await readFirst(obs)
 * expect(res).toEqual(1);
 * ```
 */
export function readFirst<T>(o: Observable<T>): Promise<T> {
  return o.pipe(first()).toPromise();
}
