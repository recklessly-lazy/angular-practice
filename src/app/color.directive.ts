import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appColor]'
})
export class ColorDirective implements AfterViewInit {
    constructor(private el: ElementRef) {

    }

    ngAfterViewInit(): void {
        this.el.nativeElement.style.color = "magenta"
    }
    modifyColor(color: string) {
        this.el.nativeElement.style.color = color
    }


}
