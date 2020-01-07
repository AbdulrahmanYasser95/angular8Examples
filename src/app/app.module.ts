import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParagraphToggleComponent } from './paragraph-toggle/paragraph-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    ParagraphToggleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
