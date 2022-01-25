import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  faMinus = faMinus;
  faPlus = faPlus;
  @Input() value: number = 0;
  @Input() min: number = 1;
  @Input() max: number | undefined;
  @Output() valueChanged: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  stepDown() {
    this.value = Math.max(this.value - 1, this.min);
  }

  stepUp() {
    this.value = this.max ? Math.min(this.value + 1, this.max) : this.value + 1;
  }

  onChange() {
    this.value = this.max ? Math.min(this.value, this.max) : this.value;
    this.valueChanged.emit(this.value);
  }

}
