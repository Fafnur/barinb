import { isPlatformBrowser, isPlatformServer, isPlatformWorkerApp, isPlatformWorkerUi } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlatformService {
  readonly isBrowser: boolean;
  readonly isServer: boolean;
  readonly isWorkerUi: boolean;
  readonly isWorkerApp: boolean;

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor(@Inject(PLATFORM_ID) private readonly platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.isServer = isPlatformServer(this.platformId);
    this.isWorkerUi = isPlatformWorkerUi(this.platformId);
    this.isWorkerApp = isPlatformWorkerApp(this.platformId);
  }
}
