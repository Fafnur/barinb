import { InjectionToken } from '@angular/core';

export interface Environments {
  production: boolean;
  localStorageSync: boolean;
}

export const ENVIRONMENTS = new InjectionToken<Environments>('Environments');
