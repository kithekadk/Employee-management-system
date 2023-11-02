import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hostlistener',
  templateUrl: './hostlistener.component.html',
  styleUrls: ['./hostlistener.component.css']
})
export class HostlistenerComponent {

  constructor(private renderer:Renderer2){}

  @ViewChild('host') host!:ElementRef

  @HostListener('mouseenter') onmouseover(event: Event){
    this.renderer.setStyle(
      this.host.nativeElement, 'background-color', 'red'  
    )
  }

  @HostListener('mouseleave') onmouseleave(event: Event){
    this.renderer.setStyle(
      this.host.nativeElement, 'background-color', 'yellow'
    )
  }
}
