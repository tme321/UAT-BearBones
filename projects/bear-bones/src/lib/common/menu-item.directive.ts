import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[bb-menu-item]',
})
export class  BBMenuItem {
    constructor(
        private _viewContainer: ViewContainerRef) { }
}