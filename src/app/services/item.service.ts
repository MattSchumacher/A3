import { Injectable } from '@angular/core';
import { Item } from '../models/item';

const testData: Item[] = [
  { "name": "Pants", "quantity": 20, "price": 50.7 },
  { "name": "Shoes", "quantity": 50, "price": 90 },
  { "name": "Hats", "quantity": 10, "price": 20.5 },
];

@Injectable( {
  providedIn: 'root'
} )
export class ItemService {

  constructor () { }

  getAllData() {
    return testData;
  }
}
