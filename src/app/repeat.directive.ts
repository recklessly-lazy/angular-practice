import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
@Directive({
    selector: '[appRepeat]',
    exportAs: 'repeat,changeText',
})
export class RepeatDirective {
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) {}
    repeatElement(count: number) {
        for (let i = 0; i < count; i++) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    }
    changeElementText(count: number) {
        for (let i = 0; i < count; i++) {
            document.getElementsByTagName('p')[i].innerHTML =
                'Text is changed...';
        }
    }
}
