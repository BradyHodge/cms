import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  standalone: true
})
export class Dropdown {
  isOpen = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.preventDefault();
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.elementRef.nativeElement.classList.add('open');
    } else {
      this.elementRef.nativeElement.classList.remove('open');
    }
  }
}