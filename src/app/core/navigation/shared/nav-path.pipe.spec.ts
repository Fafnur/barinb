import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavigationService } from '@app/core/navigation/service';

import { NavPathPipe } from './nav-path.pipe';

describe('NavPathPipe', () => {
  let service: NavigationService;
  let pipe: NavPathPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [NavigationService],
    });

    service = TestBed.inject(NavigationService);
    pipe = new NavPathPipe(service);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
