import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { PostInterface } from '../interfaces/post-interface'

@Injectable({
  providedIn: 'root'
})

export class PostService {

  apiUrl = "https://posts-oev5.onrender.com/api/posts"

  constructor(private http: HttpClient) {
  }

  getPost(): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(this.apiUrl)
  }
  
}

