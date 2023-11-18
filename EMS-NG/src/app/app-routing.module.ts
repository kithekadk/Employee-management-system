import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/shared/login/login.component';
import { RegisterComponent } from './components/shared/register/register.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { SingleEmployeeComponent } from './components/admin/single-employee/single-employee.component';
import { NotfoundComponent } from './components/shared/notfound/notfound.component';
import { AllProjectsComponent } from './components/admin/all-projects/all-projects.component';
import { CreateProjectComponent } from './components/admin/create-project/create-project.component';
import { EmployeesComponent } from './components/admin/employees/employees.component';

const routes: Routes = [
  // {path: '', pathMatch: 'full', redirectTo: ''},
  {path: '', component: LoginComponent},
  {path: 'admin', component: AdminDashboardComponent, children: [
    {path:'create-project' , component: CreateProjectComponent},
    {path:'projects' , component: AllProjectsComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'employees', component: EmployeesComponent},
  ]},
  {path: 'employee', component: EmployeeDashboardComponent},
  {path: 'admin/:employee_id', component: SingleEmployeeComponent},
  {path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
