import { NgModule } from '@angular/core';
import {DynamicContentRowComponent} from './dynamic-content-row/dynamic-content-row.component';
import {ContentDirective} from './content-directive';

@NgModule({
  declarations: [DynamicContentRowComponent,
  ContentDirective],
  imports: [
  ],
  entryComponents: [
    DynamicContentRowComponent
  ],
  exports: [ContentDirective]
})
export class DynamicComponentResolverModule { }
