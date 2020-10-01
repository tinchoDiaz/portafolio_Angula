import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  cargada: boolean = false;
  info: InfoPagina={};

  constructor( private http: HttpClient) {
    console.log('Servicio de infoPagina listo');

    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp :InfoPagina) =>{

        this.cargada= true;
        this.info= resp;
        console.log(resp);
        console.log("this.info.titulo=" + this.info.titulo);
      })

   }
}
