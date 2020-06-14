# DynamicComponentResolver

A library that is able to generate angular ui with a JSON configuration schema.

Under projects you can find the actual lib, the main Angular project aims to be a demonstration of how to use this library.

#Usage
Import the module DynamicComponentResolverModule in the module where you want to use it.

Inject the class factoryService where you want to trigger the drawing.

In your component where children could be added mark that location by the following template (Replacement for ng-content):
`<ng-template #content dynamic-content ></ng-template>`

Register all your components that configurations might use:
`this.factory.registerComponent(TestComponentComponent);`

Take your configuration and put it into the drawConfiguration method:
`const config = new DynamicComponentConfiguration('1', 'app-test-component', 0, 0, 0);
     config.childComponents.push(new DynamicComponentConfiguration('2', 'app-test-component', 0, 0, 0));
     config.childComponents.push(new DynamicComponentConfiguration('3', 'app-test-component', 0, 0, 0));
     const toDraw = [];
     toDraw.push(config);
     this.factory.drawConfiguration(this.adHost.viewContainerRef, toDraw);`

