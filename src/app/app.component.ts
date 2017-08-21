import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  allowNewServer = false;
  serverName = 'Testserver'

  constructor() {
    setTimeout( () => this.allowNewServer = true, 2000);
  }
  
}
