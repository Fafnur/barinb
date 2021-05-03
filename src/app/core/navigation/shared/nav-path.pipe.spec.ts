import { NavigationService } from '@app/core/navigation/service';

import { NavPathPipe } from './nav-path.pipe';

describe('BookingVariantImagesPipe', () => {
  it('create an instance', () => {
    const pipe = new NavPathPipe(new NavigationService());
    expect(pipe).toBeTruthy();
  });
});
