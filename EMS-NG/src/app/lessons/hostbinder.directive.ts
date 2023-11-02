import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostbinder]'
})
export class HostbinderDirective {

  constructor(private renderer: Renderer2, private element: ElementRef) { }

  @HostBinding('style.backgroundColor') color!:string

  @HostListener('mouseenter') onmouseenter(event: Event){
    this.color = 'blue'
  }

  @HostListener('click') onclick(event: Event){
    alert('listening from host binder')
  }

}
