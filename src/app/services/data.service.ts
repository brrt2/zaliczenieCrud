import { Injectable } from '@angular/core';

import { Faktura } from '../models/Faktura';
import { Klient } from '../models/Klient';

@Injectable()
export class DataService {
  faktury: Faktura[];
  klienci: Klient[];

  constructor() {
    this.faktury = [
      // {
      //   title: 'Test',
      //   description: 'lorem impsum',
      //   hide: true
      // }
    ]
  }

  // Faktury

  pobierzFaktury(): Faktura[] {
    if(localStorage.getItem('faktury') === null) {
      this.faktury = [];
    } else {
      this.faktury = JSON.parse(localStorage.getItem('faktury'));
    }
    return this.faktury;
  }

  dodajFakture(faktura: Faktura): void {
    this.faktury.unshift(faktura);

    let faktury: Faktura[];
    if(localStorage.getItem('faktury') === null) {
      faktury = [];
      faktury.unshift(faktura);
      localStorage.setItem('faktury', JSON.stringify(faktury));
    } else {
      faktury = JSON.parse(localStorage.getItem('faktury'));
      faktury.unshift(faktura);
      localStorage.setItem('faktury', JSON.stringify(faktury));
    }
  }

  usunFakture(faktura: Faktura) {
    for(let i = 0; i < this.faktury.length; i++) {
      if(faktura == this.faktury[i]) {
        this.faktury.splice(i, 1);
        localStorage.setItem('faktury', JSON.stringify(this.faktury));
      }
    }
  }


// Klienci 

  pobierzKlientow(): Klient[] {
    if(localStorage.getItem('klienci') === null) {
      this.klienci = [];
    } else {
      this.klienci = JSON.parse(localStorage.getItem('klienci'));
    }
    return this.klienci;
  }

  dodajKlienta(klient: Klient): void {
    this.klienci.unshift(klient);
    let klienci: Klient[];
    if(localStorage.getItem('klienci') === null) {
      klienci = [];
      klienci.unshift(klient);
      localStorage.setItem('klienci', JSON.stringify(klienci));
    } else {
      klienci = JSON.parse(localStorage.getItem('klienci'));
      klienci.unshift(klient);
      localStorage.setItem('klienci', JSON.stringify(klienci));
    }
  }

  usunKlienta(klient: Klient) {
    for(let i = 0; i < this.klienci.length; i++) {
      if(klient == this.klienci[i]) {
        this.klienci.splice(i, 1);
        localStorage.setItem('klienci', JSON.stringify(this.klienci));
      }
    }
  }



}
