import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.services';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {
  Paises: Pais[]=[];
  termino: string = '';

  constructor(private paisService: PaisService) {
    
  }

  get countries(): Pais[] {
    return this.paisService.countries;

  }

  searchCountries(name: string): void {
    this.paisService.findCountry(name);
  }

  buscar ( termino:string){
    this.termino=termino;
    this.paisService.findCountry( this.termino)
    .subscribe({
        next: (resp) =>{
            this.Paises = resp;
        },
        error: (err) =>{

        }
    })
  }

}
