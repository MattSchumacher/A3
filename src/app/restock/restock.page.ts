import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';
import { Location } from '@angular/common';

@Component( {
  selector: 'app-restock',
  templateUrl: './restock.page.html',
  styleUrls: [ './restock.page.scss' ],
} )
export class RestockPage implements OnInit {
  items: Item[];
  currentItem: Item;
  newQuantity: number;

  constructor ( private itemService: ItemService, private location: Location ) { }

  ngOnInit() {
    this.items = this.itemService.getAllData();
  }

  onItemSelect( selectedItem: Item ) {
    this.currentItem = selectedItem;
  }

  onRestockButton() {
    this.currentItem.quantity = this.newQuantity;
    this.newQuantity = null;
  }

  onCancelButton() {
    this.location.back();
  }
}
