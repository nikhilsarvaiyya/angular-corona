import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ChartService {
  constructor(private http: Http) {}

  // Get all data from the API
  getChartSampleData() {
    return this.http.get('assets/data/charts.json').map(res => res.json());
  }
}
