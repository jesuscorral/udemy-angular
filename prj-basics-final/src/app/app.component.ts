import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  displayShoppingList: boolean;

  manageContent(page: number)
  {
      this.displayShoppingList = (page == 1) ? true: false;
  }
}
