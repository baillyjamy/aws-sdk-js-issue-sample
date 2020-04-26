import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { AwsService, awsFactory } from './aws.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AwsService,
    { provide: APP_INITIALIZER, useFactory: awsFactory, deps: [AwsService], multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
