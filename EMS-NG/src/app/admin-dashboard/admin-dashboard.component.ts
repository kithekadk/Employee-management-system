import { Component } from '@angular/core';
import { user } from '../interfaces/user';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  sidebar = [
    {
      value: 'Employee'

    },
    {
      value: 'project'
    },
    {
      value: 'Time-entry'
    },
    {
      value: 'Logout'
    }
  ]

  employees:user[] = [
    {
      name: {
        firstname: 'Michael',
        lastname: 'Otieno'
      },
      role: 'QA',
      image: 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_640.png'
    },
    {
      name: {
        firstname: 'Stephen',
        lastname: 'Ondieki'
      },
      role: 'Software Developer',
      image: 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_640.png'
    },
    {
      name:{
        firstname: 'Eric',
        lastname: 'Kyalo'
      },
      role: 'Business Analyst',
      image: 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_640.png'
    },
    {
      name:{
        firstname: 'Perez',
        lastname: 'Annan'
      },
      role: 'Software Engineer',
      image: 'https://cdn.pixabay.com/photo/2016/08/20/05/51/avatar-1606939_640.png'
    },
    {
      name: {
        firstname: 'Sandra',
        lastname: 'Mwihaki'
      },
      role: 'Database Admin',
      image: 'https://cdn.pixabay.com/photo/2016/08/20/05/51/avatar-1606939_640.png'
    },
  ]
}
