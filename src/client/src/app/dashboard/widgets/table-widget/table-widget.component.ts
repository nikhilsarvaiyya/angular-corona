import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CountriesService } from '../../../services/countries.service';
@Component({
  selector: 'table-widget',
  templateUrl: './table-widget.component.html',
  styleUrls: ['./table-widget.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableWidgetComponent implements OnInit {
  countries: any = [];

  constructor(private allCountries: CountriesService) { }

  ngOnInit() {
    this.allCountries.getAllCountries().subscribe(countries => {
      this.countries = countries;
    });
  }
}

