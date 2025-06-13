import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCard } from '../../components/post-card/post-card';
import { MOCK_POST } from '../../mocks/mock_post';

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
}
