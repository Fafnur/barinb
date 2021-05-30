import { Inject, Injectable, Optional } from '@angular/core';

import { ENVIRONMENTS, Environments } from './environment.interface';

const ENVIRONMENTS_DEFAULT: Environments = {
  production: false,
  localStorageSync: false,
};

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  constructor(@Optional() @Inject(ENVIRONMENTS) private readonly environments: Environments) {}

  getEnvironments(): Environments {
    return this.environments ?? ENVIRONMENTS_DEFAULT;
  }
}
