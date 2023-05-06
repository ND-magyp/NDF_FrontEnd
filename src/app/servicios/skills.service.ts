import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpClient } from "@angular/common/http";
import { Skills } from '../entidades/Skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  
  //url = 'http://localhost:8080/skills';
   url = 'https://portfolio-ap-5aku.onrender.com/skills';
  constructor(private httpClient:HttpClient) { }

  public listItems(): Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.url);
  }

  public getById(id: number): Observable<any>{
    return this.httpClient.get<Skills>(this.url + `/${id}`);
  }

  public saveItem(skill: Skills): Observable<any>{
    return this.httpClient.post<any>(this.url, skill);
  }

  public updateItem(skill: Skills): Observable<any>{
    return this.httpClient.put<Skills>(this.url, skill);
  }

  public deleteItem(id: number): Observable<Skills>{
    return this.httpClient.delete<any>(this.url + `/${id}`);
  }

}

