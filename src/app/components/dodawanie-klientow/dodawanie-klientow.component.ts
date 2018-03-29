import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Klient } from '../../models/Klient';

@Component({
  selector: 'app-dodawanie-klientow',
  templateUrl: './dodawanie-klientow.component.html',
  styleUrls: ['./dodawanie-klientow.component.css']
})
export class DodawanieKlientowComponent implements OnInit {
  nazwa:string;
  adres:string;
  miasto:string;
  kodPocztowy:string;
  nip:string;
  @Output() klientAdded = new EventEmitter<Klient>();

  constructor() { }

  ngOnInit() {
  }

  dodajKlienta() {
    this.klientAdded.emit({
    nazwa: this.nazwa,
    adres: this.adres,
    miasto: this.miasto,
    kodPocztowy: this.kodPocztowy,
    nip: this.nip,
    hide: true,
    })
    this.nazwa = '';
    this.adres = '';
    this.miasto = '';
    this.kodPocztowy = '';
    this.nip = '';
  }

}