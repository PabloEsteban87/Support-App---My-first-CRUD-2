import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainComponent } from './shared/main/main.component';
import { RequestlistComponent } from './components/requestlist/requestlist.component';
import { RequestsupportComponent } from './components/requestsupport/requestsupport.component';
import { RequesteditionComponent } from './components/requestedition/requestedition.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    RequestlistComponent,
    RequestsupportComponent,
    RequesteditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
