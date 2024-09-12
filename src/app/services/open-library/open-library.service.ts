import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../model/book';

@Injectable({
  providedIn: 'root'
})
export class OpenLibraryService {

  bookApi = "https://openlibrary.org/isbn/";

  constructor(private httpClient: HttpClient) { }

  getBookDataFromIsbn(isbn: string): Observable<Book> {
    return this.httpClient.get<Book>(this.bookApi + isbn + ".json");
  }
}
