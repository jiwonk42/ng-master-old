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
  fullImagePath4: string;

  constructor() {
    this.fullImagePath1 = '/assets/images/homepage.jpeg';
    this.fullImagePath2 = '/assets/images/angular-cli.jpg';
    this.fullImagePath3 = '/assets/images/typescript.png';
    this.fullImagePath4 = '/assets/images/angular-4.png';
  }

  ngOnInit() {
  }

}
