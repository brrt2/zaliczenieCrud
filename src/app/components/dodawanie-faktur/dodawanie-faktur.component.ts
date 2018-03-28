import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Faktura } from '../../models/Faktura';

@Component({
  selector: 'app-dodawanie-faktur',
  templateUrl: './dodawanie-faktur.component.html',
  styleUrls: ['./dodawanie-faktur.component.css']
})
export class DodawanieFakturComponent implements OnInit {
    dataWystawienia: string;
    dataPlatnosci: string;
    formaPlatnosci: string;
    sprzedawca: string;
    klient:string;
    nrFaktury:number;
    uwagi:string;
  @Output() fakturaAdded = new EventEmitter<Faktura>();

  constructor() { }

  ngOnInit() {
  }

  addTask() {
    this.fakturaAdded.emit({
      dataWystawienia: this.dataWystawienia,
      dataPlatnosci: this.dataPlatnosci,
      formaPlatnosci: this.formaPlatnosci,
      sprzedawca: this.sprzedawca,
      klient: this.klient,
      nrFaktury: this.nrFaktury,
      uwagi: this.uwagi,
      hide: true,
    })
    this.dataWystawienia = '';
    this.dataPlatnosci = '';
    this.formaPlatnosci = '';
    this.sprzedawca = '';
    this.klient = '';
    this.nrFaktury = 0;
    this.uwagi = '';
  }
}
