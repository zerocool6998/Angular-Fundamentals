import { Component } from '@angular/core';
import { CartService } from '../cart-service/cart.service';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {
  // name = new FormControl('');
  // updateName() {
  //   this.name.setValue('Hafid');
  // }
  constructor(protected nameService: CartService) {}

  changeName() {
    this.nameService.updateName();
  }
}