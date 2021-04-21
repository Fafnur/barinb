import { Injectable } from '@angular/core';

import { AbstractStorage } from '../interfaces/storage.interface';
import { storageAvailable } from '../utils/storage.util';
import { MemoryStorage } from './memory.storage';

@Injectable({
  providedIn: 'root',
})
export class LocalStorage extends AbstractStorage {
  constructor() {
    super(storageAvailable('localStorage') ? window.localStorage : new MemoryStorage());
  }
}
