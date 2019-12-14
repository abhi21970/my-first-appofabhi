import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector:'app-servers',
  // template: `
  // <app-server></app-server>
  // `,
  templateUrl:"./servers.component.html",
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allownewuser=false;
  servercreationstatus="No Server Created";
  servername='Test';
  servercreated=false;
  servers=[];
  constructor() { 
    setTimeout(() => {
      this.allownewuser=true;
    },2000
    
  )
  }

  ngOnInit() {
  }
  onservercreated(){
    this.servercreated=true;
    this.servers.push(this.servername);
    this.servercreationstatus="Server Created with Name is "+this.servername;
  }
  onupdateservername(event: Event){
    this.servername=(<HTMLInputElement>event.target).value;
  }

}