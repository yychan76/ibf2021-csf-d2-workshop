import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../Product';
import {INVENTORY} from '../../mock-inventory'

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  @Output() addItemToCart: EventEmitter<Product> = new EventEmitter();
  inventory: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.inventory = INVENTORY;
  }

  onAddItemToCart(item: Product): void {
    this.addItemToCart.emit(item);
  }

}
