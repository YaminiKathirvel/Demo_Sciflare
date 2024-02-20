import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appOnlyNumber]',
})
export class OnlyNumericDirective {
  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    // Check if the pressed key is a number (0-9) or a control key
    const isNumeric = /[0-9]/.test(event.key);
    const isControlKey = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter'].includes(event.key);

    // Allow only numeric characters and control keys, block all other keys
    if (!isNumeric && !isControlKey) {
      event.preventDefault();
    }
  }
}
