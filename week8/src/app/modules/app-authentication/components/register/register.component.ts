import { RegisterForm } from './../../models/registerForm';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/modules/shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordsValidator } from '../../validators/passwords.validator';
import { CredentialAuth } from '../../models/credential';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  credentialForm: FormGroup;
  errorMessage: string;
  credentials: CredentialAuth;

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
        email: this.formBuilder.control('', [
          Validators.required,
          Validators.email,
        ]),
        password: this.formBuilder.control('', [Validators.required]),

        confirmPassword: this.formBuilder.control('', [Validators.required]),
      },
      { validators: passwordsValidator }
    );
  }

  getControl(name: string) {
    return this.form.get(name);
  }

  register() {
    const { email, password } = this.form.value as RegisterForm;
    this.credentials = {
      email,
      password,
    };
    this.authenticationService.register(this.credentials).subscribe(
      () => this.router.navigate(['/login']),
      (error: string) => (this.errorMessage = error)
    );
  }

  ngOnInit() {}
}
