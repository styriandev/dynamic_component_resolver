import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import {ContentDirective, DynamicComponentResolverModule, DynamicContentRowComponent, FactoryService} from 'dynamic-component-resolver';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
  ],
  entryComponents: [
    TestComponentComponent,
  ],
  imports: [
    BrowserModule,
    DynamicComponentResolverModule
  ],
  providers: [
    FactoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
