import { Component, Injector } from '@angular/core';
import { AddBookGenerated } from './add-book-generated.component';

@Component({
  selector: 'page-add-book',
  templateUrl: './add-book.component.html'
})
export class AddBookComponent extends AddBookGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
