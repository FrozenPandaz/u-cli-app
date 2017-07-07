import { ServerModule } from '@angular/platform-server';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'app'
    }),
    ServerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
