import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { ForumList } from './pages/forum-list/forum-list';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header, 
    Sidebar,
    ForumList
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'forum';
}
