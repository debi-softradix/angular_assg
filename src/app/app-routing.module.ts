import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  {
    path: 'Registration',
    component: RegistrationComponent

  },
  {
    path: 'Login',
    component: LoginComponent

  },
  { path:'Home',
  component:HomeComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
