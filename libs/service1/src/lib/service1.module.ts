import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestService,testInterface} from './testService';
@NgModule({
  imports: [CommonModule],
  providers:[TestService],
  declarations:[]
})
export class Service1Module {}
