import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[dynamic-content]',
})
export class ContentDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
  }

}
