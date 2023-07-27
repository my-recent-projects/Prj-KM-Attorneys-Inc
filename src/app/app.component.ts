import { Component, OnInit } from '@angular/core';

//for Angular Universal (SEC)
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = '';

  constructor(private metaTagService: Meta, private titleTagService: Title) { }
  ngOnInit() { 

    //Angular Universal - SEO Config
    this.titleTagService.setTitle(this.title);
    this.metaTagService.updateTag(
      {
        name: 'description',
        content: 'We provide professional legal representation for services such as Road Accident Fund Claims, Medical Negligence, Silicosis, and related claims to our client',
      });

    this.metaTagService.addTags([
      {
        name: 'keywords',
        content: 'KM Attorneys Inc, KM. Attorneys Inc, K.M. Attorneys Inc, KM. Attorneys. Inc, K.M. Attorneys. Inc, Monakali Attorneys, , Monakali, Attorneys, EC Attorneys, Eastern Cape Attorneys, Attorneys in Eastern Cape, Attorneys in EC, Legal, Legal Attorneys',
      },
      {
        name: 'robots',
        content: 'index, follow'
      },
      {
        name: 'author',
        content: 'K.M. Monakali'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'date',
        content: '2023-07-26',
        scheme: 'YYYY-MM-DD'
      },
      { charset: 'UTF-8' },
    ]);

  }
  
}
