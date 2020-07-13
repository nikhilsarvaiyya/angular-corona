import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts() {
    return this.http.get('http://localhost:3000/api/posts')
      .pipe(map(res => res.json()));
  }
}
