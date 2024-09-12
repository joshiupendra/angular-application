import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOpenLibraryComponent } from './book-open-library.component';

describe('BookOpenLibraryComponent', () => {
  let component: BookOpenLibraryComponent;
  let fixture: ComponentFixture<BookOpenLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookOpenLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookOpenLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
