import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/modules/shared/services/authentication.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  errorMessage: string;
  form: FormGroup;
  isDisabled = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      email: this.formBuilder.control('', [
        Validators.required,
        Validators.email,
      ]),
      password: this.formBuilder.control('', [Validators.required]),
    });
  }

  getControl(name: string) {
    return this.form.get(name);
  }

  login() {
    this.isDisabled = true;
    this.authenticationService.login(this.form.value).subscribe(
      () => this.router.navigate(['']),
      (error) => {
        this.errorMessage = error;
        this.isDisabled = false;
      }
    );
  }
}
