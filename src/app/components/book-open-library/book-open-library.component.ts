import { Component, OnInit } from '@angular/core';
import { OpenLibraryService } from '../../services/open-library/open-library.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Book } from '../../model/book';

@Component({
  selector: 'app-book-open-library',
  templateUrl: './book-open-library.component.html',
  styleUrl: './book-open-library.component.scss'
})
export class BookOpenLibraryComponent implements OnInit {

  // bookAPIForm!: FormGroup;
  // isbn: string = ""; 
  validIsbn: boolean = true; 
  book: Book = {};
  isbnForm: FormGroup;

  constructor(
    private openLibraryService: OpenLibraryService,
    private formBuilder: FormBuilder
  ) {
    this.isbnForm = this.formBuilder.group({
      isbn: ["", [Validators.required, Validators.maxLength(13), Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    // 9781847941497 - Never Split the Difference
    // 9780140328721 - "Fantastic Mr. Fox"
    //  this.getBookByIsbn("9781847941497");
  }

  getBookByIsbn(isbn: string) {
    this.openLibraryService.getBookDataFromIsbn(isbn).pipe().subscribe((book) => {
      console.log(book);
      this.book = book;
      console.log(this.book);
    });
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      const isbn = this.isbnForm.get("isbn")?.value;
      this.getBookByIsbn(isbn);
    } else {
      this.isbnForm.controls["isbn"].setErrors({ "incorrect": true });
      console.log(" ISBN Form is not valid.");
    }
  }

  isFormValid(): boolean {
    const isbn = this.isbnForm.get("isbn")?.value;
    return isbn && (isbn.length === 10 || isbn.length === 13); 
  }

  get isbn() {
    return this.isbnForm.get("isbn");
  }
}
