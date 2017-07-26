import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fullImagePath1: string;
  fullImagePath2: string;
  fullImagePath3: string;

  constructor() {
    this.fullImagePath1 = '/assets/images/homepage.jpeg';
    this.fullImagePath2 = '/assets/images/gummy2.jpg';
    this.fullImagePath3 = '/assets/images/gummy3.jpg';
  }

  ngOnInit() {
  }

}
