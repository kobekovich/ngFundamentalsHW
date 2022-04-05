import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTogglePassword]'
})
export class TogglePasswordDirective {

  constructor(private element: ElementRef) {  }

  @HostListener('click') onClick() {
    this.changeIcon('fs-3 bi bi-eye-slash-fill');
  }

  private changeIcon(toClass: string) {

    if (this.element.nativeElement.childNodes[0].className === 'fs-3 bi bi-eye-fill') {
      this.element.nativeElement.childNodes[0].className = toClass;
      this.element.nativeElement.previousSibling.childNodes[0].type = 'text'
    } else {
      this.element.nativeElement.childNodes[0].className = 'fs-3 bi bi-eye-fill';
      this.element.nativeElement.previousSibling.childNodes[0].type = 'password';
    } 
  }
}
