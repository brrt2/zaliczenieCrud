import { Component, OnInit } from '@angular/core';

import { Faktura } from '../../models/Faktura';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-lista-faktur',
  templateUrl: './lista-faktur.component.html',
  styleUrls: ['./lista-faktur.component.css']
})
export class ListaFakturComponent implements OnInit {
faktury: Faktura[];
  
  constructor(public dataService: DataService) {
  }

  ngOnInit() {
    this.faktury = this.dataService.pobierzFaktury();
  }

  dodajFakture(faktura: Faktura) {
    this.dataService.dodajFakture(faktura);
  }

}
