import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { SingleEmployeeComponent } from './components/single-employee/single-employee.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';

const routes: Routes = [
  // {path: '', pathMatch: 'full', redirectTo: ''},
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin', component: AdminDashboardComponent, children: [
    // {path:'projects' , component: AllProjectsComponent}
  ]},
  {path: 'employee', component: EmployeeDashboardComponent},
  {path: 'admin/:employee_id', component: SingleEmployeeComponent},
  {path: 'admin/projects', component: AllProjectsComponent},
  {path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
