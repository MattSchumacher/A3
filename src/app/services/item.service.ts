import { Injectable } from '@angular/core';
import { Item } from '../models/item';



@Injectable( {
  providedIn: 'root'
} )
export class ItemService {
  private testData: Item[] = [
    { "id": 1, "name": "Pants", "quantity": 20, "price": 50.7 },
    { "id": 2, "name": "Shoes", "quantity": 50, "price": 90 },
    { "id": 3, "name": "Hats", "quantity": 10, "price": 20.5 },
  ];

  constructor () { }

  getAllData() {
    return this.testData;
  }

  getDataById( id: number ): Item {
    return this.testData.find( ( item ) => {
      return item.id === id;
    } );
  }
}
