import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  getToken(){
    return localStorage.getItem('token');
  }

  setToken(response) {
    localStorage.setItem('token', response)
  }

  constructor() { }
}
