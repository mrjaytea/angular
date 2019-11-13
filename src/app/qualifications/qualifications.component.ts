import { Component, OnInit, Inject } from '@angular/core';

import { Qualifications } from '../shared/qualifications'
import { QualiService } from '../service/quali.service'

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.scss']
})
export class QualificationsComponent implements OnInit {
  qualifications: Qualifications[];
  errmess: String;

  constructor(private qualiservice: QualiService, @Inject("baseUrl") private baseUrl) { }

  ngOnInit() {
    this.qualiservice.getQualis()
      .subscribe((quali) => this.qualifications = quali,
      errmess => this.errmess = <any>errmess)
  }

}

export default QualificationsComponent;
