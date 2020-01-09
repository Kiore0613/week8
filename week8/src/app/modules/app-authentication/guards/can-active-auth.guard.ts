import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class CanActiveAuthGuard implements CanActivate {
  constructor(
    private mockApiService: AuthenticationService,
    private router: Router
  ) {}

  canActivate() {
    const isLoggedIn = this.mockApiService.logged();
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
