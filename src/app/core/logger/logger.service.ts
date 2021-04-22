import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log<T = any>(payload: T): void {
    console.log(payload);
  }

  error<T = any>(payload: T): void {
    console.error(payload);
  }

  info<T = any>(payload: T): void {
    // eslint-disable-next-line no-console
    console.info(payload);
  }
}
