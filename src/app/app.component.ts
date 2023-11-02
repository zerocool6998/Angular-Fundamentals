import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  name= 'Angular';
  // ids: Array<string> = ['one', 'two', 'three', 'four'];

  observable = new Observable((observer) => {
    observer.next("Start Processing ...");
    setTimeout(() => observer.next("Still Processing"), 3000);
    setTimeout(() => observer.complete(), 5000);
  })

  
  ngOnInit(){
    this.observable.subscribe({
      next: (data) => console.log(data),
      error: (err) => console.error(err),
      complete: () => console.log("Process Complete")
}
    )     
  }
}
