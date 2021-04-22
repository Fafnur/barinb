import { TestBed } from '@angular/core/testing';

import { RootRouterStateSerializer } from './root-router-state-serializer.service';

describe('RootRouterStateSerializer', () => {
  let service: RootRouterStateSerializer;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [RootRouterStateSerializer],
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(RootRouterStateSerializer);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
