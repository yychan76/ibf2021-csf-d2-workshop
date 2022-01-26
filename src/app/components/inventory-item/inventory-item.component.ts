import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../Product';


@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.css']
})
export class InventoryItemComponent implements OnInit {
  @Input() item!: Product;
  @Output() addBtnClick: EventEmitter<Product> = new EventEmitter();
  addBtnText = '+';
  btnClass = "btn btn-primary align-middle rounded-circle";

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(item: Product): void {
    this.addBtnClick.emit(item);
  }

}
