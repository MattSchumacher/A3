import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Item } from '../models/item';
import { HistoryService } from '../services/history.service';
import { ItemService } from '../services/item.service';

@Component( {
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: [ 'home.page.scss' ],
} )
export class HomePage implements OnInit {
  items: Item[];
  quantity = "";
  total = 0;
  selectedItem: Item;

  constructor ( private itemService: ItemService, private historyService: HistoryService, public toastController: ToastController ) { }

  ngOnInit() {
    this.items = this.itemService.getAllData();
  }

  onButtonClick( number: string ) {
    this.quantity += number;
    this.total = Number( this.quantity ) * this.selectedItem.price;
  }

  onClearButton() {
    this.quantity = "";
    this.total = 0;
  }

  onItemSelect( currentItem: Item ) {
    this.selectedItem = currentItem;
  }

  onBuyButton() {
    if ( this.selectedItem && this.quantity ) {
      const currentQuantity = Number( this.quantity );
      this.selectedItem.quantity -= currentQuantity;
      this.historyService.addNew( this.selectedItem, currentQuantity, this.total );
    } else {
      this.presentSelectToast();
    }
  }

  async presentSelectToast() {
    const toast = await this.toastController.create( {
      message: 'You need to select an item and quantity',
      duration: 2000
    } );
    toast.present();
  }
}
