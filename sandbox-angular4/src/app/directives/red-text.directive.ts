import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[app-red-text]'
})

    // used in basic component (in the html)
export class RedTextDirective {
  constructor(ref: ElementRef) {
    ref.nativeElement.style.color = 'red';
  }

/*   ngOnInit() {
    this.ElementRef.nativeElement.style.color = 'red';
  } */
}

