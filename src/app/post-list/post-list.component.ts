import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: any[] = [];
  constructor( private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPosts().subscribe((data) => {
      this.posts = data;
    })
  }

}
