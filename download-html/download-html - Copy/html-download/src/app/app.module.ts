import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FirstFormComponent } from './first-form/first-form.component';
import { ClientService } from './service/client.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ClientService],
  bootstrap: [FirstFormComponent]
})
export class AppModule { }
