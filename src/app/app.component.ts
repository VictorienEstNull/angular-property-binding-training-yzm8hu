import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  likesAngular = true;
  logo = 'https://angular.io/assets/images/logos/angular/angular.png';
  logoWidth = 50;

  getLogoWidth(): number {
    return 70;
  }
}
