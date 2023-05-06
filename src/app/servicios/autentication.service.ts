import { Injectable } from '@angular/core';

import { BehaviorSubject, map, Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  // url = 'http://localhost:8080/login';
   url = 'https://portfolio-ap-5aku.onrender.com/login';
  currentUserSubject: BehaviorSubject<any>;


  constructor(private http: HttpClient) {
    console.log("Corre el servicio de autenticación");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
  }

  loginUser(credenciales: any): Observable<any> {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<any>(this.url, credenciales, httpOptions).pipe(map(data => {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      console.log("Servicio corriendo" + JSON.stringify(data));
      return data;
    }));
  }
  
  get usuarioAutenticado() {
    return this.currentUserSubject.value;
  }
}