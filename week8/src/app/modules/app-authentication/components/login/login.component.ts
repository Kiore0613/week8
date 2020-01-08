import { Component, OnInit } from '@angular/core';
import { MockApiService } from 'src/app/modules/shared/services/mock-api.service';
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
    private mockApiService: MockApiService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
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
    this.mockApiService.login(this.form.value).subscribe((response) => {
        localStorage.setItem('token', response.token)
        this.router.navigate(['']);
    });
  }
}
