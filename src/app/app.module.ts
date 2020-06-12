import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import {FactoryService} from './factory.service';
import {ContentDirective} from './content-directive';
import { DynamicContentRowComponent } from './dynamic-content-row/dynamic-content-row.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    ContentDirective,
    DynamicContentRowComponent
  ],
  entryComponents: [
    DynamicContentRowComponent,
    TestComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    FactoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
