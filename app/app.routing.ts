import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideosComponent } from './videos/vidoes.component';

const appRoutes: Routes = [
  {
     path: '',
     component: VidoesComponent
   }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
