import { Component, Injector } from '@angular/core';
import { BookGenerated } from './book-generated.component';

@Component({
  selector: 'page-book',
  templateUrl: './book.component.html'
})
export class BookComponent extends BookGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
