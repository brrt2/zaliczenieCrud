import { Injectable } from '@angular/core';

import { Faktura } from '../models/Faktura';

@Injectable()
export class DataService {
  faktury: Faktura[];

  constructor() {
    this.faktury = [
      // {
      //   title: 'Test',
      //   description: 'lorem impsum',
      //   hide: true
      // }
    ]
  }

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
}
