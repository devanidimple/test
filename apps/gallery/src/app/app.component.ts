import { Component } from '@angular/core';
import {TestService,testInterface} from '@mf-app/service1';
@Component({
  selector: 'mf-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class GalleryAppComponent {
  title = '';

  constructor(public data:TestService){
    console.log("in gallry");

  }

  setData(){
this.data.setData("Hello in gallery");
  }
  getData(){
this.title=this.data.getData().name;
  }
}
