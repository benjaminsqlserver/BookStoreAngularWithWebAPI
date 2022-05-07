import { Component, Injector } from '@angular/core';
import { EditBookGenerated } from './edit-book-generated.component';

@Component({
  selector: 'page-edit-book',
  templateUrl: './edit-book.component.html'
})
export class EditBookComponent extends EditBookGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
