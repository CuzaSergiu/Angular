import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SundayComponent } from './sunday/sunday.component';
import { MondayComponent } from './monday/monday.component';
import { ThuesdayComponent } from './thuesday/thuesday.component';
import { WednesdayComponent } from './wednesday/wednesday.component';

@NgModule({
  declarations: [
    AppComponent,
    SundayComponent,
    MondayComponent,
    ThuesdayComponent,
    WednesdayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
