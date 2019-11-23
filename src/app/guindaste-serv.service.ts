import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuindasteServService {
  constructor(public http: HttpClient) { }

  async saveRegister(register: any) {
    return this.http.post<any>('http://localhost:3000/controllers/function/guindaste/atributos', register).toPromise();
  }

  async saveAltura(register: any) {
    return this.http.post<any>('http://localhost:3000/controllers/function/guindaste/heigth', register).toPromise();
  }

  async saveAngulo(register: any) {
    return this.http.post<any>('http://localhost:3000/controllers/function/guindaste/angle', register).toPromise();
  }

  async saveEletroima(eletroima: any) {
    return this.http.post<any>('http://localhost:3000/controllers/function/guindaste/eletroima', eletroima).toPromise();
  }

  async getStatus() {
    return this.http.get<any>('http://localhost:3000/controllers/function/guindaste/status').toPromise();
  }

  async getStatusLayout() {
    return this.http.get<any>('http://localhost:3000/controllers/function/guindaste/statusLayout').toPromise();
  }
}
