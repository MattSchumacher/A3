import { Injectable } from '@angular/core';
import { History } from '../models/history';
import { Item } from '../models/item';

@Injectable( {
  providedIn: 'root'
} )
export class HistoryService {
  id = 0;
  historyItems: History[] = [];

  getAll(): History[] {
    return this.historyItems;
  }

  getById( id: number ): History {
    return this.historyItems.find( ( item ) => {
      return item.id === id;
    } );
  }

  private newId(): number {
    this.id += 1;
    return this.id;
  }

  addNew( item: Item, quantity: number, total: number ) {
    const newHistory: History = { "id": this.newId(), "item": item, "total": total, "quantity": quantity, "purchaseDate": new Date() };
    this.historyItems.push( newHistory );
  }
}
