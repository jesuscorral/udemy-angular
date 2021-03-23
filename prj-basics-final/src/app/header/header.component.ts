import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() pageSelect: EventEmitter<number> = new EventEmitter();

  onSelect(page: number)
  {
    this.pageSelect.emit(page);
  }
}
