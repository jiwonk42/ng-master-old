import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { BOOKS } from './mock-books';

@Injectable()
export class BookService {

  constructor() { }

  getBooks() {
    return BOOKS;
  }

  getBookById(bookId: number) {
    for (var i = 0; i <= BOOKS.length -1; i++) {
      if (BOOKS[i].id === bookId) {
        return BOOKS[i];
      }
    }
  }
}
