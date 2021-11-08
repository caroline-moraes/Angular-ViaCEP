import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CEP } from './cep';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  constructor(private http: HttpClient) { }

  getCep(cep: String) {
    return this.http.get<CEP>('https://viacep.com.br/ws/'+ cep +'/json/');
  }
}
