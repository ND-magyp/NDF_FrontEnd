import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpClient } from "@angular/common/http";
import { Proyectos } from '../entidades/Proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
   //url = 'http://localhost:8080/proyectos';
  url = 'https://portfolio-ap-5aku.onrender.com/proyectos';
  constructor(private httpClient:HttpClient) { }

  public listItems(): Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.url);
  }

  public getById(id: number): Observable<any>{
    return this.httpClient.get<Proyectos>(this.url + `/${id}`);
  }

  public saveItem(proyecto: Proyectos): Observable<any>{
    return this.httpClient.post<any>(this.url, proyecto);
  }

  public updateItem(proyecto: Proyectos): Observable<any>{
    return this.httpClient.put<Proyectos>(this.url, proyecto);
  }

  public deleteItem(id: number): Observable<Proyectos>{
    return this.httpClient.delete<any>(this.url + `/${id}`);
  }

}
