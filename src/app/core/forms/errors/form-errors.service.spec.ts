import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FormErrorsService } from './form-errors.service';

describe('FormErrorsService', () => {
  let service: FormErrorsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [FormErrorsService],
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(FormErrorsService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
