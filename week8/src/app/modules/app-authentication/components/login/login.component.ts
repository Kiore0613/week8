import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/modules/shared/services/authentication.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  form: FormGroup;

  constructor(
    private mockApiService: AuthenticationService,
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
    this.form.controls.email.errors.required;
    this.form.controls.password.errors.required;
  }

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  ngOnInit() {}

  login() {
    this.mockApiService.login(this.form.value).subscribe(
      () => this.router.navigate(['']),
      (error) => (this.errorMessage = error)
    );
  }
}
