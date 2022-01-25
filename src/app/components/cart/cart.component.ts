import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../../CartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cart: CartItem[] = [];
  @Output() removeItemFromCart: EventEmitter<CartItem> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onRemoveButtonClick(cartItem: CartItem): void {
    this.removeItemFromCart.emit(cartItem);
  }

  getCartTotalQuantity(): number {
    var itemsCount = 0;
    for (const cartItem of this.cart) {
      itemsCount += cartItem.quantity;
    }
    return itemsCount;
  }

  getCartTotalCost(): number {
    var cost = 0;
    for (const cartItem of this.cart) {
      cost += cartItem.quantity * cartItem.item.price;
    }
    return cost;
  }

}
