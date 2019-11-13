import { Injectable } from '@angular/core';
import { Qualifications } from '../shared/qualifications';
import baseUrl from '../baseUrl';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpProcessmsgService } from './http-processmsg.service'

@Injectable({
  providedIn: 'root'
})
export class QualiService {

  constructor(private http: HttpClient, private httpProcessmsgService: HttpProcessmsgService) { }

  getQualis(): Observable<Qualifications[]>{
    return this.http.get<Qualifications[]>(baseUrl + 'qualifications')
    .pipe(catchError(this.httpProcessmsgService.handleError));
  }
}
