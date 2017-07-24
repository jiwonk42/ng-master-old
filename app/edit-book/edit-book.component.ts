import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
  providers: [BookService]
})
export class EditBookComponent implements OnInit {
  @Input() selectedBook;

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }
  
  beginUpdatingBook(bookToUpdate) {
    this.bookService.updateBook(bookToUpdate);
  }

}
