import { NotFoundComponent } from './modules/app-authentication/components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/app-authentication/components/home/home.component';
import { LoginComponent } from './modules/app-authentication/components/login/login.component';
import { RegisterComponent } from './modules/app-authentication/components/register/register.component';
import { CanActiveAuthGuard } from './modules/app-authentication/guards/can-active-auth.guard';
import { CanActiveHomeGuard } from './modules/app-authentication/guards/can-active-home.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [CanActiveAuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [CanActiveHomeGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [CanActiveHomeGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
