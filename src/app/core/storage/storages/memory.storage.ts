import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MemoryStorage implements Storage {
  private data: Record<string, any> = {};

  get length(): number {
    return Object.keys(this.data).length;
  }

  clear(): void {
    this.data = {};
  }

  getItem<T = any>(key: string): T | null {
    return key in this.data ? this.data[key] : null;
  }

  key(index: number): string | null {
    const keys = Object.keys(this.data);

    return index >= 0 && keys.length < index ? keys[index] : null;
  }

  removeItem(key: string): void {
    delete this.data[key];
  }

  setItem<T = any>(key: string, value: T): void {
    this.data[key] = value;
  }
}
