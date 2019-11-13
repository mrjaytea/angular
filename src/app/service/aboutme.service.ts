import { Injectable } from '@angular/core';
import { Aboutme } from '../shared/aboutme';
import { Hobby } from '../shared/hobby';
import baseUrl from '../baseUrl';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpProcessmsgService } from './http-processmsg.service'

@Injectable({
  providedIn: 'root'
})
export class AboutmeService {

  constructor(private http: HttpClient, private httpProcessmsgService: HttpProcessmsgService) { }

  getAboutme(): Observable<Aboutme> {
    return this.http.get<Aboutme>(baseUrl + 'about')
    .pipe(catchError(this.httpProcessmsgService.handleError));
  }
}
