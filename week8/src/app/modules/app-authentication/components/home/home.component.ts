import { Component, OnInit } from '@angular/core';
import { MockApiService } from 'src/app/modules/shared/services/mock-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private mockApiService: MockApiService, private router: Router) {}

  ngOnInit() {}

  logOut() {
    this.mockApiService.logout();
    this.router.navigate(['/login']);
  }
}
