import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online{
    color: white;
  }
  `]
})
export class ServerComponent implements OnInit {
  serverId=10;
  serverStatus='online';
  constructor() {
    this.serverStatus=Math.random() > 0.5 ? 'online':'offline';
   }
getserverstatus(){
  return this.serverStatus;
}
getcolor(){
  return this.serverStatus==='online' ? 'green' : 'red';
}
  ngOnInit() {
  }

}