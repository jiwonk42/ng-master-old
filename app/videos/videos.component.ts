import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {YTApiService} from 'ngx-youtube';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  constructor(private router: Router, private YTS: YTApiService){}

  ngOnInit() {
  }
  doSearch(keyword){
    let request = this.YTS.search(keyword, 25, 'video');
    request.execute(res=>{
        console.log(res);
    });
  }

  doLogin(ev){
    console.log(this.YTS.auth(ev));
  }
}
