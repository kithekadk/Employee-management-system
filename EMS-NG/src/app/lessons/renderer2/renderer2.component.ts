import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-renderer2',
  templateUrl: './renderer2.component.html',
  styleUrls: ['./renderer2.component.css']
})
export class Renderer2Component implements OnInit{

  @ViewChild('attribute') attribute! :ElementRef

  constructor (private renderer: Renderer2){}

  ngOnInit(): void {

  }

  ngAfterViewInit():void{
    let div = this.renderer.createElement('div')
    let sometext = this.renderer.createText('This is from Renderer')

    this.renderer.appendChild(div, sometext)
    this.renderer.appendChild(this.attribute.nativeElement, div)
  }



}
