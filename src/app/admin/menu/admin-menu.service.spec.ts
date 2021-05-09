import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AdminMenuService } from './admin-menu.service';

describe('AdminMenuService', () => {
  let service: AdminMenuService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AdminMenuService],
    }).compileComponents();

    service = TestBed.inject(AdminMenuService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
