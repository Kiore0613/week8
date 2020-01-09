import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  getToken() {
    return localStorage.getItem('token');
  }

  hasToken() {
    return !!localStorage.getItem('token');
  }

  setToken(response: string) {
    localStorage.setItem('token', response);
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  constructor() {}
}
