import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-watchvalue-child',
  templateUrl: './watchvalue-child.component.html',
  styleUrls: ['./watchvalue-child.component.scss']
})
export class WatchvalueChildComponent {
  @Input() count!: number
  @Output() countChange = new EventEmitter()

  setCount(value: number) {
    if (this.count <= 5) {
      this.countChange.emit(this.count + value)
    }
  }
}
