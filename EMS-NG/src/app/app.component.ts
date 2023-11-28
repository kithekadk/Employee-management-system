import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Management System';
  subtitle = 'EMS'
}


// class Cat {
//   name!:string
//   breed! :string

//   constructor(age: number){}
// }

// class Dog {
//   name!:string
//   breed! :string

//   constructor(speed: number){}
// }

// class Chicken {
//   constructor(age:number){}
// }

// let cat1 = new Cat(20)
// let dog1 = new Dog(70)
// let chick = new Chicken()

// class Animal {
//   cat:any
//   dog:any
//   chick:any
//   constructor(cat1:any, dog1:any, chick:any){
//     this.cat = cat1;
//     this.dog = dog1;
//     this.chick = chick
//   }

//   printAnimals(){
//     console.log(cat1);
//   }
// }

// let animal1 = new Animal()