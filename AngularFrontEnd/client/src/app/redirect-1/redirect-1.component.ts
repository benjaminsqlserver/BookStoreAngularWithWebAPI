import { Component, Injector } from '@angular/core';
import { Redirect1Generated } from './redirect-1-generated.component';

@Component({
  selector: 'page-redirect-1',
  templateUrl: './redirect-1.component.html'
})
export class Redirect1Component extends Redirect1Generated {
  constructor(injector: Injector) {
    super(injector);
  }
}
