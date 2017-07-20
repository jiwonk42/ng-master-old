import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { YTApiModule } from 'ngx-youtube';

import { AppComponent } from './app.component';
import { VideosComponent } from './videos/videos.component';
import { routing } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    YTApiModule.setConfig(
      {
        clientId: "549414897645-dupdge5q3kuuq798o4banq84gvovrjpg.apps.googleusercontent.com",
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"],
        scope: "https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner"
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
