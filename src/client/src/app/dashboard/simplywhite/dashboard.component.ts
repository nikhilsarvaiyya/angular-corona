import { Component, OnInit } from '@angular/core';
import { StatesService } from '../../services/states.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class SimplyWhiteDashboardComponent implements OnInit {

  // instantiate posts to an empty array
  posts: any = [];

  constructor(private allState: StatesService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.allState.getAllPosts().subscribe(posts => {
      console.log(posts)
      this.posts = posts;
    });

    console.log(this.posts)
    //Retrive From Asset Json Object
    //this.posts = POSTDATA


  }
}
