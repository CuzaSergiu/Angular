import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SundayComponent } from './sunday/sunday.component';
import { MondayComponent } from './monday/monday.component';
import { ThuesdayComponent } from './thuesday/thuesday.component';
import { WednesdayComponent } from './wednesday/wednesday.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    SundayComponent,
    MondayComponent,
    ThuesdayComponent,
    WednesdayComponent,
    LoginComponent,
    DirectivesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
