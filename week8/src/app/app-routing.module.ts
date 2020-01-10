import { NotFoundComponent } from './modules/app-authentication/components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/app-authentication/components/home/home.component';
import { LoginComponent } from './modules/app-authentication/components/login/login.component';
import { RegisterComponent } from './modules/app-authentication/components/register/register.component';
import { AuthGuard } from './modules/app-authentication/guards/auth-guard.guard';
import { HomeGuard } from './modules/app-authentication/guards/home-guard.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [HomeGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [HomeGuard],
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
