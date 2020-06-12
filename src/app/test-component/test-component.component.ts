import {Component, ElementRef, Injector, OnInit, ViewContainerRef} from '@angular/core';
import {DynamicComponent} from 'dynamic-component-resolver';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent extends DynamicComponent {
  constructor( viewContainerRef: ViewContainerRef, injector: Injector, elementRef: ElementRef) {
    super(viewContainerRef, injector, elementRef);
  }

  componentCreated(): void {
    console.log('HI');
  }

}
