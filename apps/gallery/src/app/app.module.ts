import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GalleryAppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [GalleryAppComponent],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [GalleryAppComponent],
  exports:[]
})
export class GalleryAppModule {
  constructor(){
    console.log("constructor called")
  }
}


