import {ElementRef, Injector, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ContentDirective} from './content-directive';

export abstract class DynamicComponent implements OnInit, OnDestroy {
  tagName: string;
  @ViewChild(ContentDirective) adHost: ContentDirective;

  constructor(public viewContainerRef: ViewContainerRef, private injector: Injector, private elementRef: ElementRef) {
    this.tagName = elementRef.nativeElement.tagName;
  }
  ngOnDestroy(): void {
  }

  getChildContent() {
    return this.adHost.viewContainerRef;
  }

  ngOnInit(): void {
    this.componentCreated();
  }

  abstract componentCreated(): void;
}
