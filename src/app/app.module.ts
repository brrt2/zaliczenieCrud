import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DataService } from './services/data.service';
import { FakturaComponent } from './components/faktura/faktura.component';
import { DodawanieFakturComponent } from './components/dodawanie-faktur/dodawanie-faktur.component';
import { ListaFakturComponent } from './components/lista-faktur/lista-faktur.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FakturaComponent,
    DodawanieFakturComponent,
    ListaFakturComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
