import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { BOOKS } from './mock-books';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BookService {
  books: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.books = database.list('books');
  }

  getBooks() {
    return this.books;
  }

  getBookById(bookId: number) {
    for (var i = 0; i <= BOOKS.length -1; i++) {
      if (BOOKS[i].id === bookId) {
        return BOOKS[i];
      }
    }
  }
}
