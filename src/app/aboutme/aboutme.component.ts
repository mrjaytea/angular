import { Component, OnInit, Inject } from '@angular/core';
import { Aboutme } from '../shared/aboutme';
import { Hobby } from '../shared/hobby';
import { AboutmeService } from '../service/aboutme.service'
import baseUrl from '../baseUrl';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  about: Aboutme;
  hobby: Hobby[];
  errmess: String;
 

  constructor(private aboutmeservive: AboutmeService, @Inject("baseUrl") private baseUrl) { }

  ngOnInit() {
    // Fetch the info using http get when initialisation
    this.aboutmeservive.getAboutme()
      .subscribe((about) => this.about = about,
      errmess => this.errmess = <any>errmess)
  }

}

export default AboutmeComponent;
