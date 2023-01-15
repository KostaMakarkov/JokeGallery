import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getFromLocal(key: string) {
    const result = localStorage.getItem(key)|| '{}';
    return JSON.parse(result);
  }

  setToLocal(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  clearByKey(key: string) {
    localStorage.removeItem(key);
  }

  clearLocal() {
    localStorage.clear();
  }
}
