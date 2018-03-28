import { Component, OnInit, Input } from '@angular/core';

import { Faktura } from '../../models/Faktura'; 
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-faktura',
  templateUrl: './faktura.component.html',
  styleUrls: ['./faktura.component.css']
})
export class FakturaComponent implements OnInit {
  @Input('faktura') faktura: Faktura;
   
  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  removeTask(faktura: Faktura) {
    const response = confirm('Are you sure to delete it?');
    if(response ) {
      this.dataService.removeTask(faktura);
    }
  }
}
