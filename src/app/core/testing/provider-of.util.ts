import { FactoryProvider, Type } from '@angular/core';
import { instance } from 'ts-mockito';

export function providerOf<T>(token: Type<T>, mock: T): FactoryProvider {
  return {
    provide: token,
    useFactory: (): T => instance(mock),
  };
}
