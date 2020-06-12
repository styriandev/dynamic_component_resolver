import {ComponentFactoryResolver, ElementRef, Injectable, Type, ViewContainerRef} from '@angular/core';
import {DynamicComponent} from './dynamic-component';
import {DynamicComponentConfiguration} from './dynamic-component-configuration';
import {TestComponentComponent} from './test-component/test-component.component';
import {ContentDirective} from './content-directive';
import {DynamicContentRowComponent} from './dynamic-content-row/dynamic-content-row.component';

@Injectable({
  providedIn: 'root'
})
export class FactoryService {
  private availableComponents: Map<string, Type<DynamicComponent>>;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.availableComponents = new Map<string, Type<DynamicComponent>>();
    this.registerComponent(DynamicContentRowComponent);
  }

  registerComponent(dynamicComponent: Type<DynamicComponent>) {
    const component = (dynamicComponent as any).__annotations__[0];
    const tagName: string = component.selector;
    this.availableComponents.set(tagName.toLowerCase(), dynamicComponent);
  }

  drawConfiguration(viewContainerRef: ViewContainerRef, configuration: DynamicComponentConfiguration[]) {
    const set = new Map();
    const withoutRow = configuration.filter(_ => _.tag !== 'app-dynamic-content-row');
    if (withoutRow) {
      withoutRow.map(item => item.row).forEach(_ => {
        set.set(_, _);
      });

      set.forEach((value, key) => {
        // at position insert a new row config
        const rowElement = configuration.find(_ => _.row === value);
        if (rowElement.childComponents && rowElement.childComponents.length > 0) {
          const rowConfig = new DynamicComponentConfiguration(`row${value}`, `app-dynamic-content-row`, 0, 12, value);
          rowConfig.childComponents = rowElement.childComponents;
          rowElement.childComponents = [];
          rowElement.childComponents.push(rowConfig);
        }
      });
    }

    configuration.forEach(config => {
      const componentToCreate = this.availableComponents.get(config.tag);
      if (componentToCreate) {
        const refToCreatedComponent = this.createComponent(viewContainerRef, componentToCreate);
        if (config.childComponents && config.childComponents.length > 0) {
          this.drawConfiguration(refToCreatedComponent.instance.getChildContent(), config.childComponents);
        }
      }
    });
  }

  createComponent(viewContainerRef: ViewContainerRef, component: Type<DynamicComponent>) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = viewContainerRef.createComponent(componentFactory);
    return componentRef;
  }
}
