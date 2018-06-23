import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warningalert/warningalert.component';
import { SuccessalertComponent } from './successalert/successalert.component';

@NgModule({
  declarations: [
    AppComponent, 
    WarningAlertComponent, 
    SuccessalertComponent
  ],
  imports: [
    BrowserModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
