import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private httpClient: HttpClient) { }

  getData():Observable<any> {
    return this.httpClient.get<Observable<any>>("https://jsonplaceholder.typicode.com/users/1/todos");
  }
}
