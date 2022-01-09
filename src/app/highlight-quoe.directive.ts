import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightQuoe]'
})
export class HighlightQuoeDirective {

  constructor() { }
  @HostListener("click") onClicks(){
    this.textDeco("green")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("danger")
  }
  private textDeco(action:string){
    //this.elem.nativeElement.style.color=action;
  }

}
