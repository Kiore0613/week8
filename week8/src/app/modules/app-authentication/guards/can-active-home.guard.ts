import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { MockApiService } from '../../shared/services/mock-api.service';

@Injectable({
  providedIn: 'root',
})
export class CanActiveHomeGuard implements CanActivate {
  constructor(private mockApiService: MockApiService, private router: Router) {}

  canActivate() {
    console.log(this.mockApiService.isLogOut());
    if (this.mockApiService.isLogOut()) {
      
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
