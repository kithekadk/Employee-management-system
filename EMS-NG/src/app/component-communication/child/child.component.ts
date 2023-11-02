import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input('paragraph1') paragraph1!: string
  @Input('paragraph2') paragraph2!: string 
  @Input('somevalue') somevalue!:string

  heading:string = 'This is string interpolation'
  body:string = 'This is the body'

  onClick(){
    alert('You clicked the button')
  }

  doSomething(){
    alert('You hovered on me')
  }

  name = 'Daniel'

  popName(animal:string){
    alert(animal)
  }
}
