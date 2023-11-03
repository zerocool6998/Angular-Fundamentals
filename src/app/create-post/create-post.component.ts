import { Component } from '@angular/core';
import { PostService } from '../post-service/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  postTitle: string = '';
  postBody: string = '';

  constructor(private postService: PostService) {}

  onSubmit() {
    const postData = {
      title: this.postTitle,
      body: this.postBody
    };

    this.postService.createPost(postData).subscribe((response) => {
      console.log('Post created:', response);
    });
  }
}
