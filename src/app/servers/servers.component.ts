import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  allowNewServer = false;
  serverName = 'Testserver'
  serverCreationStatus = '';
  serverCreated = false;

  constructor() {
    setTimeout( () => this.allowNewServer = true, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName() {
    setTimeout( () => this.serverName = (<HTMLInputElement>event.target).value, 2000);
  }

}
