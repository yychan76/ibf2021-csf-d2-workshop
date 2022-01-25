import { Component } from '@angular/core';
import { CartItem } from './CartItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingcart';
  cart: CartItem[] = [];

  onAddItemToCart(item: any) {
    console.log(item);
    let existingCartItem = this.cart.find(i => i.item.id == item.id);
    if (item.available > 0) {
      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        let cartItem: CartItem = {item: item, quantity: 1};
        this.cart.push(cartItem);
      }
      item.available -= 1;
    }
  }

  onRemoveItemFromCart(cartItem: CartItem) {
    this.cart = this.cart.filter(i => i.item.id != cartItem.item.id);
    console.log(this.cart);
  }
}
