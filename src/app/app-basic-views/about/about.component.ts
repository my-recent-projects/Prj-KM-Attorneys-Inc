import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  //page title
  viewTitle = "About Us";
  
  //ngSwitch for nav-tabs
  viewMode = 'defaultTab';
}
