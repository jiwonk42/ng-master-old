import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { YTApiModule } from 'ngx-youtube';
import { AppComponent } from './app.component';
import { VideosComponent } from './videos/videos.component';
import { routing } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    HeaderComponent,
    SidebarComponent,
    BooksComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
