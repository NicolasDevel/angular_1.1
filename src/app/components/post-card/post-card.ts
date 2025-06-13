import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-card',
  imports: [
    CommonModule
  ],
  templateUrl: './post-card.html',
  styleUrl: './post-card.css'
})
export class PostCard {
  @Input() title!: string
  @Input() createdAt!: string
  @Input() description!: string
  @Input() authorAvatar!: string
  @Input() userAvatars!: string[]
  @Input() comments!: number
}
