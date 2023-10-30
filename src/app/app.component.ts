import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  name= 'Angular';
  ids: Array<string> = ['one', 'two', 'three', 'four'];
}
