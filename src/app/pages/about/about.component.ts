import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  pepe : any= [];

  constructor( public _infoService: InfoPaginaService) {
    console.log("Contructor de About.Component");
  }

  ngOnInit() {
  }

}
