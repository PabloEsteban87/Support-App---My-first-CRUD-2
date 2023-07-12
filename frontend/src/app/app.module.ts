import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainComponent } from './shared/main/main.component';
import { RequestlistComponent } from './support-app/components/requestlist/requestlist.component';
import { RequestsupportComponent } from './support-app/components/requestsupport/requestsupport.component';
import { RequesteditionComponent } from './support-app/components/requestedition/requestedition.component';
import { ModelsComponent } from './support-app/models/models.component';
import { ServicesComponent } from './support-app/services/services.component';
import { ViewsComponent } from './support-app/views/views.component';
import { EnvironmentsComponent } from '../environments/environments.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    RequestlistComponent,
    RequestsupportComponent,
    RequesteditionComponent,
    ModelsComponent,
    ServicesComponent,
    ViewsComponent,
    EnvironmentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
