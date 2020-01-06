import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, HomeComponent, LayoutComponent],
  imports: [
    CommonModule
  ]
})
export class AppAuthenticationModule { }
