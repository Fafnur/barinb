import { TestBed } from '@angular/core/testing';

import { SessionStorage } from './session.storage';

describe('SessionStorage', () => {
  let service: SessionStorage;
  const key = 'sess';
  const value = 'New Value';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [SessionStorage],
    }).compileComponents();

    service = TestBed.inject(SessionStorage);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should return value', (done) => {
    service.setItem(key, value);

    service.getItem(key).subscribe((result) => {
      expect(result).toBe(value);
      done();
    });
  });

  it('should return null for removed item', (done) => {
    service.setItem(key, value);
    service.removeItem(key);

    service.getItem(key).subscribe((result) => {
      expect(result).toBeNull();
      done();
    });
  });

  it('should clear storage', () => {
    service.setItem(key, value);
    service.clear();
    expect(service.length).toBe(0);
  });
});
