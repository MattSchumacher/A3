import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoryService } from '../services/history.service';

import { History } from '../models/history';

@Component( {
  selector: 'app-history-detail',
  templateUrl: './history-detail.page.html',
  styleUrls: [ './history-detail.page.scss' ],
} )
export class HistoryDetailPage implements OnInit {
  item: History;

  constructor ( private route: ActivatedRoute, private historyService: HistoryService ) { }

  ngOnInit() {
    const id = Number( this.route.snapshot.paramMap.get( 'id' ) );
    this.item = this.historyService.getById( id );
  }

}
