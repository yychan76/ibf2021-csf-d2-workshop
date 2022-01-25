import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/app/CartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem!: CartItem;
  @Output() removeBtnClick: EventEmitter<CartItem> = new EventEmitter();
  removeBtnText: string = 'Remove';
  btnClass = "btn btn-danger";

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(item: CartItem): void {
    this.removeBtnClick.emit(item);
  }

  onValueChanged(value: number): void {
    let originalAvailable = this.cartItem.item.available + this.cartItem.quantity;
    this.cartItem.quantity = value;
    this.cartItem.item.available = originalAvailable - value;
  }

}
