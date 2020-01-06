import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "register",
        component: RegisterComponent
      }
    ])
  ],
  
  exports: [LoginComponent, RegisterComponent, HomeComponent, LayoutComponent]
})
export class AppAuthenticationModule {}
