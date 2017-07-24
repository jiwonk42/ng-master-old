import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [BookService]
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit() {
  }

  submitForm(title: string, author: string, price: number, image: string, description: string) {
    var newBook: Book = new Book(title, author, price, image, description);
    this.bookService.addBook(newBook);
  }

}
