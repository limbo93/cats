import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule 
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
