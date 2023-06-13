import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmplIdComponent } from './empl-id/empl-id.component';
import { NewoneService } from './Services/newone.service';
import { RealmeComponent } from './realme/realme.component';

@NgModule({
  declarations: [
    AppComponent,
    EmplIdComponent,
    RealmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NewoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
