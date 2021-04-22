import { LoggerService } from './logger.service';

describe('LocalStorage', () => {
  let service: LoggerService;

  beforeEach(() => {
    service = new LoggerService();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
