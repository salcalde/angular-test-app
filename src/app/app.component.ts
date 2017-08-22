import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  username = '';
  fieldClearable = false;

  constructor() {};

  checkUsername(e: Event) {
    if ((<HTMLInputElement>e.target).value !== '') {
      this.fieldClearable = true
    } else {
      this.fieldClearable = false;
    }
  }

  clearUsername() {
    this.username = '';
    this.fieldClearable = false;
  }

}