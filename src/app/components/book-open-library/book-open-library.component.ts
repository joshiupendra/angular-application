import { Component, OnInit } from '@angular/core';
import { OpenLibraryService } from '../../services/open-library/open-library.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Book } from '../../model/book';

@Component({
  selector: 'app-book-open-library',
  templateUrl: './book-open-library.component.html',
  styleUrl: './book-open-library.component.scss'
})
export class BookOpenLibraryComponent implements OnInit {

  // bookAPIForm!: FormGroup;
  isbn: string = ""; 
  validIsbn: boolean = true; 
  book: Book = {};

  constructor(
    private openLibraryService: OpenLibraryService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // 9781847941497 - Never Split the Difference
    // 9780140328721 - "Fantastic Mr. Fox"
      this.getBookByIsbn("9781847941497");
  }

  getBookByIsbn(isbn: string) {
    this.openLibraryService.getBookDataFromIsbn(isbn).pipe().subscribe((book) => {
      console.log(book);
      this.book = book;
      console.log(this.book);
    });
  }

  onSubmit() {

  }
}
