import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UnitPageComponent } from './unit-page/unit-page.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { BuisnessPageComponent } from './buisness-page/buisness-page.component';
import * as validator from 'validator';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    UnitPageComponent,
    EmployeePageComponent,
    BuisnessPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // validator
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
