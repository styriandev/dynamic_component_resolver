import {Component, ElementRef, Injector, OnInit, ViewContainerRef} from '@angular/core';
import {DynamicComponent} from '../dynamic-component';

@Component({
  selector: 'app-dynamic-content-row',
  templateUrl: './dynamic-content-row.component.html',
  styleUrls: ['./dynamic-content-row.component.scss']
})
export class DynamicContentRowComponent extends DynamicComponent {
  constructor( viewContainerRef: ViewContainerRef, injector: Injector, elementRef: ElementRef) {
    super(viewContainerRef, injector, elementRef);
  }

  componentCreated(): void {
  }

}
