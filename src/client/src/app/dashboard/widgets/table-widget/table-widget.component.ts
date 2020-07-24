import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StatesService } from '../../../services/states.service';
@Component({
  selector: 'table-widget',
  templateUrl: './table-widget.component.html',
  styleUrls: ['./table-widget.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableWidgetComponent implements OnInit {
  tasks: any = [];

  constructor(private allState: StatesService) { }

  ngOnInit() {
    this.allState.getAllCountries().subscribe(tasks => {
      console.log("tasks")
      this.tasks = tasks;
    });
  }
}
