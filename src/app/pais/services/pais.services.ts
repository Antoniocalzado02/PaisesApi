import { Injectable } from '@angular/core';
import { Pais } from '../interfaces/pais.interface';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class PaisService {
  private url = 'https://restcountries.com/v3.1/'
  private _country: Pais[] = [];

  constructor(private http: HttpClient) { }

  get countries(): Pais[] {
    return [...this._country]
  }

  findCountry(nameCountry: string): void {
    this.http.get<Pais[]>(`${this.url}name/${nameCountry}`)
    .subscribe( resp => this._country = resp);
  }
}