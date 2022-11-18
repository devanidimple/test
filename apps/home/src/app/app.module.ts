import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GalleryAppComponent } from 'apps/gallery/src/app/app.component';
import {GalleryAppModule} from '../../../gallery/src/app/app.module';
import { AppComponent } from './app.component';
import { TestService } from '@mf-app/service1';
// import { NxWelcomeComponent } from './nx-welcome.component';
@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule,BrowserModule,RouterModule.forRoot([
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'gallery',
        component:GalleryAppComponent
    },
  ])
   ],
  providers: [TestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
