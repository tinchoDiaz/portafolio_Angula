import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  cargada: boolean = false;
  info: InfoPagina={};
  equipo: any =[];

  constructor( private http: HttpClient) {
    console.log('Servicio de infoPagina listo');
    this.cargarInfo();
    this.cargarEquipo();
   }

  private cargarInfo(){

    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp :InfoPagina) =>{

        this.cargada= true;
        this.info= resp;
        /*console.log(resp);*/
      })
  }

  private cargarEquipo(){
     this.http.get('https://angular-html-fbd5c.firebaseio.com/equipo.json')
      .subscribe( (resp : any[]) =>{

        this.cargada= true;
        this.equipo= resp;
        /*console.log(this.equipo[0].url);*/
      })
  }

}
