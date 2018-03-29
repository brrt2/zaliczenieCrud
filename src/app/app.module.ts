import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DataService } from './services/data.service';
import { FakturaComponent } from './components/faktura/faktura.component';
import { DodawanieFakturComponent } from './components/dodawanie-faktur/dodawanie-faktur.component';
import { ListaFakturComponent } from './components/lista-faktur/lista-faktur.component';
import { KlientComponent } from './components/klient/klient.component';
import { UzytkownikComponent } from './components/uzytkownik/uzytkownik.component';
import { RouterModule, Routes } from '@angular/router';
import { ListaKlientowComponent } from './components/lista-klientow/lista-klientow.component';
import { DodawanieKlientowComponent } from './components/dodawanie-klientow/dodawanie-klientow.component';

export const appRoutes: Routes = [
  // { path: '',
  //   redirectTo: '/main',
  //   pathMatch: 'full'
  // },
  { path: 'klient', component: KlientComponent,
  },
  { path: 'main', component: AppComponent },
  { path: 'uzytkownik', component: UzytkownikComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FakturaComponent,
    DodawanieFakturComponent,
    ListaFakturComponent,
    UzytkownikComponent,
    KlientComponent,
    ListaKlientowComponent,
    DodawanieKlientowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
