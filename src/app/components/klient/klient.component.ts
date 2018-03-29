import { Component, OnInit, Input } from '@angular/core';

import { Klient } from '../../models/Klient'; 
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-klient',
  templateUrl: './klient.component.html',
  styleUrls: ['./klient.component.css']
})
export class KlientComponent implements OnInit {
  @Input('klient') klient: Klient;
   
  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  usunKlienta(klient: Klient) {
    const response = confirm('Czy na pewno chcesz usunac tego klienta ?');
    if(response ) {
      this.dataService.usunKlienta(this.klient);
    }
  }
}