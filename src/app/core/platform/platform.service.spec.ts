import { PlatformService } from './platform.service';

export const PLATFORM_BROWSER_ID = 'browser';
export const PLATFORM_SERVER_ID = 'server';
export const PLATFORM_WORKER_APP_ID = 'browserWorkerApp';
export const PLATFORM_WORKER_UI_ID = 'browserWorkerUi';

/**
 * @see https://github.com/angular/angular/blob/master/packages/common/src/platform_id.ts
 */
describe('PlatformService', () => {
  it('should be browser', () => {
    const service = new PlatformService(PLATFORM_BROWSER_ID);
    expect(service.isBrowser).toBeTruthy();
  });

  it('should be server', () => {
    const service = new PlatformService(PLATFORM_SERVER_ID);
    expect(service.isServer).toBeTruthy();
  });

  it('should be server', () => {
    const service = new PlatformService(PLATFORM_WORKER_APP_ID);
    expect(service.isWorkerApp).toBeTruthy();
  });

  it('should be server', () => {
    const service = new PlatformService(PLATFORM_WORKER_UI_ID);
    expect(service.isWorkerUi).toBeTruthy();
  });
});
