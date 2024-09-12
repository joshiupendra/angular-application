export interface Book {
  isbn_10: string;
  isbn_13: string;
  title: string;
  subtitle?: string;
  full_title?: string;
  number_of_pages: number;
  created: {};
  publish_date: Date;
  publishers: [];
  covers: [];
  authors: [];
}