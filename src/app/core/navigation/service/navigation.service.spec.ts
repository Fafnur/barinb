import { NavigationPath } from '@app/core/navigation/common';

import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
  let service: NavigationService;

  beforeEach(() => {
    service = new NavigationService();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should return getEnvironments', () => {
    expect(service.getRoute(NavigationPath.Rooms)).toBe(['/', 'rooms']);
  });
});
