import {
    Directive,
    ElementRef,
    HostListener,
    Input,
    Renderer2,
} from '@angular/core';

@Directive({
    selector: 'p[appMessage]',

})
export class MessageDirective {
    @Input('msg') message!: string;
    constructor(private el: ElementRef, private renderer: Renderer2) {
        renderer.setStyle(el.nativeElement, 'cursor', 'pointer');
    }
    @HostListener('click') onClick() {
        this.el.nativeElement.innerText = this.message;
        this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    }
}
