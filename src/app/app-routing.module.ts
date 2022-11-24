import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BuisnessPageComponent } from './buisness-page/buisness-page.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UnitPageComponent } from './unit-page/unit-page.component';

const routes: Routes = [
  { path : './' , component : AppComponent},
  { path : 'landingPage' , component : LandingPageComponent },
  { path : 'buisnessPage', component : BuisnessPageComponent },
  { path : 'employeePage', component : EmployeePageComponent },
  { path : 'unitPage', component : UnitPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
