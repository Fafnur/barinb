import { TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { IconsModule } from './icons.module';

describe('IconsModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconsModule, MatIconModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(IconsModule).toBeTruthy();
  });
});
