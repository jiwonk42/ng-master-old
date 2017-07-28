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
  fullImagePath5: string;
  fullImagePath6: string;
  fullImagePath7: string;

  constructor() {
    this.fullImagePath1 = '/assets/images/homepage.jpeg';
    this.fullImagePath2 = '/assets/images/angular-cli.png';
    this.fullImagePath3 = '/assets/images/javascript.png';
    this.fullImagePath4 = '/assets/images/angular-4.png';
    this.fullImagePath5 = '/assets/images/goal.jpg';
    this.fullImagePath6 = '/assets/images/rocket.png';
    this.fullImagePath7 = '/assets/images/development.png';
  }

  ngOnInit() {
  }

}
