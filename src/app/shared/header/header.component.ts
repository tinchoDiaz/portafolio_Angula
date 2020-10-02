import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  termino: string;

  constructor( public _servicio: InfoPaginaService,
                private router: Router ) {
  }

  ngOnInit() {
  }

  buscarProducto(){
    if (this.termino.length<1){ /*Termino esta asociado al item de busqueda en el HTML*/
      return;
    }
    this.router.navigate(['/search', this.termino]);
  }


}
