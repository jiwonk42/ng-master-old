import {Injectable} from '@angular/core';
import { Book } from './book.model';
import { BOOKS } from './mock-books';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CartService {

  private itemsInCartSubject: BehaviorSubject<Book[]> = new BehaviorSubject([]);
  private itemsInCart: Book[] = [];

  constructor() {
    this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
  }

  public addToCart(item: Book) {
    this.itemsInCartSubject.next([...this.itemsInCart, item]);
  }

  public getItems(): Observable<Book[]> {
    return this.itemsInCartSubject;
  }
}
