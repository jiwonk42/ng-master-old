import { Component } from '@angular/core';
import { Book } from '../book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  constructor(private router: Router) { }
  /*constructor (public title: string, public author: string,
   public price: number, public image: string, public description: string, public id: number) */
  books: Book[] = [
    new Book("Ng-Book 2: The Complete Book on Angular 2 (2016)",
   "Ari Lerner, Felipe Coury, and Nate Murray",
  55, "https://prodimage.images-bn.com/pimages/9780991344611_p0_v1_s192x300.jpg", "ng-book 2. The in-depth, complete, and up-to-date book on Angular 2. Become an Angular 2 expert today.", 1),
    new Book("Angular 2 Development with TypeScript (2016)", "Anton Moiseev and Yakov Fain", 36, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZhqU3evOB2kCcGJJ90rAURTibbPHjAgnL8uLg1H8R0sndAJsintukclAEivQ4UUJEqjWM", "Angular 2 Development with Typescript teaches you what you need to start using Angular, while you also learn TypeScript and how to take advantage of its benefits.", 2),
    new Book("Pro Angular (2017)", "Adam Freeman", 32, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8sRSq4zAIjj4P-7Z36zHtsLe6E3JZ8ijSxO3MftkO8yjBv97HWdUK0wOTLzFAcHe-CX7d", "Get the most from Angular 2, the leading framework for building dynamic JavaScript applications. Best-selling author Adam Freeman begins by describing the MVC pattern and the benefits it can offer and then shows you how to use Angular in your projects, starting from the nuts-and-bolts and building up to the most advanced and sophisticated features, going in-depth to give you the knowledge you need.", 3)
  ];

  goToDetailPage(clickedBook: Book) {
    this.router.navigate(['books', clickedBook.id]);
  };
}
