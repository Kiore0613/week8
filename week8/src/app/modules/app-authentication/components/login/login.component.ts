import { Component, OnInit } from '@angular/core';
import { MockApiService } from 'src/app/modules/shared/services/mock-api.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { loginAuth } from '../../models/loginAuth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errorMessage: string;

  constructor(
    private mockApiService: MockApiService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {}
  form = this.formBuilder.group({
    username: this.formBuilder.control('', [Validators.required]),
    password: this.formBuilder.control('', [Validators.required]),
  });

  login(form: loginAuth) {
    this.mockApiService.login(form).subscribe((response) => {
      if (response) {
        localStorage.setItem('token', response.token),
          (error) => (this.errorMessage = error);
        this.router.navigate(['']);
      } else {
      }
    });
  }
}
