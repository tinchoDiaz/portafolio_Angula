import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  idddd: string;

  constructor( private route: ActivatedRoute,
               public productosService: ProductosService) { }

  ngOnInit() {

    this.route.params
      .subscribe( parametros => {
          console.log("id=" + parametros['id']);

          this.idddd= parametros['id'];

          this.productosService.getProductos(parametros['id'])
            .subscribe( (producto: ProductoDescripcion) => {

              console.log("this.idddd=" + this.idddd);
              this.producto= producto;

              console.log(producto);
            });

      });
  }

}
