import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideosComponent } from './videos/videos.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { DocumentsComponent } from './documents/documents.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'documents',
    component: DocumentsComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'books/:id',
    component: BookDetailComponent
  },
  {
    path: 'videos',
    component: VideosComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
