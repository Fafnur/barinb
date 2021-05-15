import { Injectable } from '@angular/core';

import { Config } from './config.interface';

export const CONFIG_DEFAULT: Config = {
  googleMapKey: '',
};

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private readonly config: Config;

  constructor() {
    this.config = {
      googleMapKey: process.env.GOOGLE_MAPS_KEY ?? CONFIG_DEFAULT.googleMapKey,
    };
  }

  getConfig(): Config {
    return this.config;
  }
}
