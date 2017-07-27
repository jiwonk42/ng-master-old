import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { FirebaseListObservable } from 'angularfire2/database';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {

  public shoppingCartItems$: Observable<Book[]> = of([]);
  public shoppingCartItems: Book[] = [];

  constructor(private cartService: CartService) {
    this.shoppingCartItems$ = this
      .cartService
      .getItems();

    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
  }

  ngOnInit() {
  }

}
