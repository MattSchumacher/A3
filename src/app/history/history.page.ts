import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../services/history.service';
import { History } from '../models/history';

@Component( {
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: [ './history.page.scss' ],
} )
export class HistoryPage implements OnInit {
  historyItems: History[];

  constructor ( private historyService: HistoryService ) { }

  ngOnInit() {
    this.historyItems = this.historyService.getAll();    
  }
}
