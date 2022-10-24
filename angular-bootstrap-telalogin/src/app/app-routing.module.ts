import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component'
import { FormLoginComponent }from 'src/app/form-login/form-login.component'

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: FormLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
