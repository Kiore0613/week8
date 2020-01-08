import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CanActiveAuthGuard } from './guards/can-active-auth.guard';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [CanActiveAuthGuard],
  exports: [LoginComponent, RegisterComponent, HomeComponent],
})
export class AppAuthenticationModule {}
