import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {TestService,testInterface} from '@mf-app/service1';
@Component({
  selector: 'mf-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '';
  constructor(public router:Router,public d:TestService){

  }

  onclick(){
    console.log("route");
this.router.navigate(["gallery"]);
  }
  setData(){
    this.d.setData("hello primary");
  }
  getData(){
  this.title=  this.d.getData().name;
  }
}
