import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(title: string, author: string, price: number, image: string, description: string) {
    var newBook: Book = new Book(title, author, price, image, description);
    console.log(newBook);
  }

}
