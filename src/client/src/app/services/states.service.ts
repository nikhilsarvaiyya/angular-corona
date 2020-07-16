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

  getAllCats(): Observable<Cat[]> {
    return this.httpClient.get<Cat[]>('http://localhost:3000/tasks')
  }

  getCat(name: string): Observable<Cat> {
    return this.httpClient.get<Cat>('http://localhost:3000/tasks/' + name)
  }

  insertCat(cat: Cat): Observable<Cat> {
    return this.httpClient.post<Cat>('http://localhost:3000/tasks/', cat)
  }

  updateCat(cat: Cat): Observable<void> {
    return this.httpClient.put<void>(
      'http://localhost:3000/tasks/' + cat.name,
      cat
    )
  }

  deleteCat(name: string) {
    return this.httpClient.delete('http://localhost:3000/tasks/' + name)
  }
}

