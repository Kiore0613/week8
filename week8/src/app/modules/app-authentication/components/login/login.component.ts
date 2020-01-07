import { Component, OnInit } from "@angular/core";
import { MockApiService } from "src/app/modules/shared/services/mock-api.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { loginAuth } from '../../models/loginAuth';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  errorMessage: string;

  constructor(private mockApiService: MockApiService) {}

  ngOnInit() {}
  form = new FormGroup({
    username: new FormControl("", [
      Validators.required
    ]),
    password: new FormControl("", [
      Validators.required
    ])
  })

  login(form:loginAuth) {
    this.mockApiService.login(form).subscribe(
      response => localStorage.setItem("token", response.token),
      error => (this.errorMessage = error)
    );
  }
}
