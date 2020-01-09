import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MockApiService } from '../../shared/services/mock-api.service';

@Injectable({
  providedIn: 'root',
})
export class CanActiveAuthGuard implements CanActivate {
  constructor(private mockApiService: MockApiService, private router: Router) {}

  canActivate() {
    this.mockApiService.logged().subscribe((status) => {
      if (!status) {
        this.router.navigate(['/login']);
      }
    });
    return true;
  }
}
