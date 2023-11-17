import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ParentComponent } from './component-communication/parent/parent.component';
import { ChildComponent } from './component-communication/child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Renderer2Component } from './lessons/renderer2/renderer2.component';
import { HostlistenerComponent } from './lessons/hostlistener/hostlistener.component';
import { HostbinderDirective } from './lessons/hostbinder.directive';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { SentenceCasePipe } from './pipes/sentence-case.pipe';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { SingleEmployeeComponent } from './components/single-employee/single-employee.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesComponent } from './components/employees/employees.component';
import { SearchPipe } from './pipes/search.pipe';
import { AllProjectsComponent } from './components/all-projects/all-projects.component'

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
    SingleEmployeeComponent,
    NotfoundComponent,
    EmployeesComponent,
    SearchPipe,
    AllProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
