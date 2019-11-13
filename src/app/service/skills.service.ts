import { Injectable } from '@angular/core';
import { Skills } from '../shared/skills';
import baseUrl from '../baseUrl';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpProcessmsgService } from './http-processmsg.service'

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient, private httpProcessmsgService: HttpProcessmsgService) { }

  getSkills(): Observable<Skills[]> {
    return this.http.get<Skills[]>(baseUrl + 'skills')
    .pipe(catchError(this.httpProcessmsgService.handleError));
  }

  getSkill(id: number): Observable<Skills> {
    return this.http.get<Skills>(baseUrl + 'skills/' + id)
    .pipe(catchError(this.httpProcessmsgService.handleError));
  }
}
