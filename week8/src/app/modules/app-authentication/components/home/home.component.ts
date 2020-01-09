import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/modules/shared/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  isHidden: boolean;

  ngOnInit() {
    this.isHidden = true;
  }

  showProfile() {
    this.isHidden = !this.isHidden;
  }

  logOut() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
