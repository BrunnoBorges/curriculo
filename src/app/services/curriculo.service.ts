import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeDetailss } from '../models/home';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurriculoService {

  SERVER_URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }
  
  getHomeDetails() {
    // return this.http.get(`${environment.api}/home`);
    return this.http.get(`${this.SERVER_URL}/home`);
  }

  getCoursesDetails() {
    // return this.http.get(`${environment.api}/home`);
    return this.http.get(`${this.SERVER_URL}/cursos`);
  }

  getProfessionalDetails() {
    // return this.http.get(`${environment.api}/home`);
    return this.http.get(`${this.SERVER_URL}/profissional`);
  }

  getExperienceDetails() {
    // return this.http.get(`${environment.api}/home`);
    return this.http.get(`${this.SERVER_URL}/experiencia`);
  }


}

