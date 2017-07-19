import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideosComponent } from './videos/videos.component';

const appRoutes: Routes = [
  {
     path: '',
     component: VideosComponent
   }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
