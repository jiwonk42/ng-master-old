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

  addBook(newBook: Book) {
    this.books.push(newBook);
  }

  getBookById(bookId: string) {
    return this.database.object('books/' + bookId);
  }
}
