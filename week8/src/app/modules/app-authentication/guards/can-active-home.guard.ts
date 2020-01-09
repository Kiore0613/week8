import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class CanActiveHomeGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  canActivate() {
    if (this.authenticationService.isLogIn()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
