import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [BookService, AuthenticationService]
})
export class AdminComponent implements OnInit {
  private isLoggedIn: boolean = null;

  constructor(public authService: AuthenticationService, private router: Router, private bookService: BookService) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
      }
    });
  }

  ngOnInit() {
  }

  submitForm(title: string, author: string, price: number, image: string, description: string) {
    var newBook: Book = new Book(title, author, price, image, description);
    this.bookService.addBook(newBook);
  }

}
