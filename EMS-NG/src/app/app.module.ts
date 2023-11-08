import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParentComponent } from './component-communication/parent/parent.component';
import { ChildComponent } from './component-communication/child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Renderer2Component } from './lessons/renderer2/renderer2.component';
import { HostlistenerComponent } from './lessons/hostlistener/hostlistener.component';
import { HostbinderDirective } from './lessons/hostbinder.directive';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SentenceCasePipe } from './pipes/sentence-case.pipe';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { SingleEmployeeComponent } from './single-employee/single-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ParentComponent,
    ChildComponent,
    Renderer2Component,
    HostlistenerComponent,
    HostbinderDirective,
    AdminDashboardComponent,
    SentenceCasePipe,
    EmployeeDashboardComponent,
    SingleEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
