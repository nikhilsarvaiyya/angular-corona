import { Component, OnInit } from '@angular/core';
import { StatesService } from '../../services/states.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class SimplyWhiteDashboardComponent implements OnInit {

  // instantiate posts to an empty array
  tasks: any = [];

  constructor(private allState: StatesService) { }

  ngOnInit() {
    // Retrieve tasks from the API
    this.allState.getAllCats().subscribe(tasks => {
      this.tasks = tasks;
    });
    //Retrive From Asset Json Object
    //this.posts = POSTDATA
  }
}
