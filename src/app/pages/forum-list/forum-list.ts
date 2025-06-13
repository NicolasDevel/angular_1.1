import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCard } from '../../components/post-card/post-card';
import { MOCK_POST } from '../../mocks/mock_post';
import { PostInterface } from '../../interfaces/post-interface';
import { PostService } from '../../services/post-service';

@Component({
  selector: 'app-forum-list',
  imports: [
    CommonModule,
    PostCard
  ],
  templateUrl: './forum-list.html',
  styleUrl: './forum-list.css'
})
export class ForumList {
  variablePostMock = MOCK_POST;

  variablePostFromApi: PostInterface[] = []

  constructor(private postService: PostService){}

  ngOnInit(){
    this.fetchPosts()
  }

  fetchPosts(): void {
    this.postService.getPost().subscribe({
      next: (data) => {
        this.variablePostFromApi = data;
      },
      error: (err) => {
        console.log("Hey tienes un error", err)
      }
    });
  }
}
