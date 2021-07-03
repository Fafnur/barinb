import { LocalStorage } from './local.storage';

describe('LocalStorage', () => {
  let service: LocalStorage;
  const key = 'local';
  const value = 'New Value';

  beforeEach(() => {
    service = new LocalStorage();
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
