import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

export interface Cat {
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor(private httpClient: HttpClient) { }

  getAllCountries(): Observable<Cat[]> {
    return this.httpClient.get<Cat[]>('http://localhost:3000/countries')
  }

  getCat(name: string): Observable<Cat> {
    return this.httpClient.get<Cat>('http://localhost:3000/countries/' + name)
  }

  insertCat(cat: Cat): Observable<Cat> {
    return this.httpClient.post<Cat>('http://localhost:3000/countries/', cat)
  }

  updateCat(cat: Cat): Observable<void> {
    return this.httpClient.put<void>(
      'http://localhost:3000/countries/' + cat.name,
      cat
    )
  }

  deleteCat(name: string) {
    return this.httpClient.delete('http://localhost:3000/countries/' + name)
  }
}

