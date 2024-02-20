import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyAlphabetic]'
})
export class OnlyAlphabeticDirective {

  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    const allowedChars = /^[a-zA-Z]+$/;

    if (!event.key.match(allowedChars)) {
      event.preventDefault();
    }
  }
}
