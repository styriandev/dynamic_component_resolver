import {Component, OnInit, ViewChild} from '@angular/core';
import {ContentDirective, DynamicComponentConfiguration, FactoryService} from 'dynamic-component-resolver';
import {TestComponentComponent} from './test-component/test-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(ContentDirective) adHost: ContentDirective;

  title = 'component-factory';

  constructor(private factory: FactoryService) {
  }

  ngOnInit(): void {
    this.factory.registerComponent(TestComponentComponent);
    const config = new DynamicComponentConfiguration('1', 'app-test-component', 0, 0, 0);
    config.childComponents.push(new DynamicComponentConfiguration('2', 'app-test-component', 0, 0, 0));
    config.childComponents.push(new DynamicComponentConfiguration('3', 'app-test-component', 0, 0, 0));
    const toDraw = [];
    toDraw.push(config);
    this.factory.drawConfiguration(this.adHost.viewContainerRef, toDraw);
  }



}
