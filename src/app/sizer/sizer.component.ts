import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css']
})
export class SizerComponent {

  constructor(private route: ActivatedRoute) {}

  mgOnInit() {
    this.route.queryParams.subscribe((queryParams) => {
      const param1 = queryParams['param1'];
      console.log(param1);
    })
  }

  @Input() size: number | string = 16;
  @Output() sizeChange = new EventEmitter<number>();

  inc() { this.resize(+1); }
  dec() { this.resize(-1); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

}

// you stiill haven't tested query and fragment query
