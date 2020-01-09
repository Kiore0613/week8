import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/modules/shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordsValidator } from '../../validators/passwords.validator';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  credentialForm: FormGroup;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.form = this.formBuilder.group(
      {
        firstName: this.formBuilder.control('', [Validators.required]),
        lastName: this.formBuilder.control('', [Validators.required]),
        username: this.formBuilder.control('', [Validators.required]),

        credentialForm: this.formBuilder.group({
          email: this.formBuilder.control('', [
            Validators.required,
            Validators.email,
          ]),
          password: this.formBuilder.control('', [Validators.required]),
        }),
        confirmPassword: this.formBuilder.control('', [Validators.required]),
      },
      { validators: passwordsValidator }
    );
  }

  get firstName() {
    return this.form.get('firstName');
  }
  get lastName() {
    return this.form.get('lastName');
  }
  get username() {
    return this.form.get('username');
  }
  get email() {
    return this.form.get('credentialForm.email');
  }
  get password() {
    return this.form.get('credentialForm.password');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  register() {
    this.authenticationService
      .register(this.form.get('credentialForm').value)
      .subscribe(
        () => this.router.navigate(['/login']),
        (error: string) => (this.errorMessage = error)
      );
  }

  ngOnInit() {}
}
