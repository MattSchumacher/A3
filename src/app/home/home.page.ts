import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';

@Component( {
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: [ 'home.page.scss' ],
} )
export class HomePage implements OnInit {
  items: Item[];
  quantity = "";

  constructor ( private itemService: ItemService ) { }

  ngOnInit() {
    this.items = this.itemService.getAllData();
  }

  onButtonClick( number: string ) {
    this.quantity += number;
  }
}
