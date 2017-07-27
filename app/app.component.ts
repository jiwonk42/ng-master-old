import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent implements OnInit {
  user;
  private isLoggedIn: boolean;
  private userName: string;
  gcsesearch: SafeHtml;

  constructor(public authService: AuthenticationService, private router: Router, private sanitizer: DomSanitizer) {

    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
        this.router.navigate(['home']);
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
        this.router.navigate([]);
      }
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.gcsesearch = this.sanitizer.bypassSecurityTrustHtml("<gcse:search></gcse:search>");

    var cx = '002252165983632915379:9sxjlgtkqym';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  }
}
