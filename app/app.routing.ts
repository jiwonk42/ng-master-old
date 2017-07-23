import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideosComponent } from './videos/videos.component';
import { BooksComponent } from './books/books.component';

const appRoutes: Routes = [
  {
    path: 'books',
    component: BooksComponent
  },
  {
     path: 'videos',
     component: VideosComponent
   }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
