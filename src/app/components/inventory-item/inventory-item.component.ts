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
  addBtnText = 'Add';
  btnClass = "btn btn-primary";

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(item: Product): void {
    this.addBtnClick.emit(item);
  }

}
