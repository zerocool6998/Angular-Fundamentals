import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  name = new FormControl();

  constructor() { }

  updateName() {
    this.name.setValue('Hafid')
  }

}
