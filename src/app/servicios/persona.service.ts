
import { HttpClient } from '@angular/common/http';
import { Persona } from '../entidades/Persona';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  // url = 'http://localhost:8080/persona';
  url = 'https://portfolio-ap-5aku.onrender.com/persona';
  constructor(private httpClient:HttpClient) { }
  
  public getById(id: number): Observable<any>{
    return this.httpClient.get<Persona>(this.url + `/${id}`);
  }

  public updateItem(persona: Persona): Observable<any>{
    return this.httpClient.put<Persona>(this.url, persona);
  }

}
