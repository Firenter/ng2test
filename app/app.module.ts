//Angular imports
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//this app's imports
import { AppComponent }   from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
