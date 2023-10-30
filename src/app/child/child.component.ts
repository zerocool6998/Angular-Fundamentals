import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div>
      {{name}}
      <button (click)="dec()">-</button>
      {{val}}
      <button (click)="inc()">+</button>
    </div>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class ChildComponent  {
  @Input() name: string = '';
  @Input() val: number = 0;
  @Output() changed = new EventEmitter<number>()

  inc() {
    this.changed.emit(this.val + 1)
  }

  dec() {
    this.changed.emit(this.val - 1 < 0 ? 0 : this.val - 1)
  }
}