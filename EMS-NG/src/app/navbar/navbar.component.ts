import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  // loggedIn!:boolean

  loggedInTrue = localStorage.getItem('loggedIn')

  loggedIn = this.loggedInTrue

  ngOnInit(): void {
    // this.checkLoggedIn()
  }

  checkLoggedIn(){

    console.log(this.loggedInTrue);
    if(this.loggedInTrue == 'true'){
      // this.loggedIn = true
    }
  }

  Logout(){
    localStorage.clear()
    // this.checkLoggedIn()
  }

  date = new Date()
}
