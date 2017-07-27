import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent {

  //searchForm: any;
  searchForm: FormGroup;
  search = new FormControl ("", Validators.required);
  results$: Observable<any>;

  constructor(private router: Router, private _formBuilder: FormBuilder, private _http: Http) {
    const API_URL = 'https://www.googleapis.com/youtube/v3/search';
    // get a key at https://console.developers.google.com/apis/api/youtube
    const API_KEY = 'AIzaSyAKz8w8JdGjXWeIrJKcreV10f-UENDHncY';

    this.searchForm = this._formBuilder.group({
      'search': ['', Validators.required]
    });

    this.results$ = this.searchForm.controls.search.valueChanges
    .switchMap(query => this._http.get(`${API_URL}?q=${query}&key=${API_KEY}&part=snippet`))  // <-- Observable Http
    .map(res => res.json())
    .map(res => res.items);
  }

  showContents() {
    if (this.searchForm.controls.search.value === "") {
      return true;
    }
  }
}
