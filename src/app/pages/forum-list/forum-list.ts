import { Component } from '@angular/core';
import { PostCard } from '../../components/post-card/post-card';

@Component({
  selector: 'app-forum-list',
  imports: [
    PostCard
  ],
  templateUrl: './forum-list.html',
  styleUrl: './forum-list.css'
})
export class ForumList {

}
