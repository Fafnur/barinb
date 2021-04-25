import { InjectionToken } from '@angular/core';

export interface Environments {
  production: boolean;
  gmapsApiKey: string;
}

export const ENVIRONMENTS = new InjectionToken<Environments>('Environments');
