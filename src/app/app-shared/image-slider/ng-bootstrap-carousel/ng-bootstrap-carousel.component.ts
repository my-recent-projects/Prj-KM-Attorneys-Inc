import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-ng-bootstrap-carousel',
  templateUrl: './ng-bootstrap-carousel.component.html',
  styleUrls: ['./ng-bootstrap-carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class NgBootstrapCarouselComponent {

  images = [
    { title: 'Legal Attorneys', short: 'We are an accredited law firm.', src: "../assets/banners/6.jpg" },
    { title: 'Tailored Services', short: 'We offer a wide range of legal services.', src: "../assets/banners/1.jpg" },
    { title: 'Reasonable Rates', short: 'Services at reasonable rates.', src: "../assets/banners/11.jpg" },
    { title: 'Effective Support', short: 'Reliable customer support.', src: "../assets/banners/2.jpg" }
  ];

}
