import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando: boolean = true;
  productos: Producto[] =[];
  productosFiltrados: Producto[] =[];

  constructor( private http: HttpClient
               ) {

    console.log('Servicio de productosService listo');
    this.cargarProductos();
   }

  private cargarProductos(){
    return new Promise( (resolve, reject) => {
      this.http.get('https://angular-html-fbd5c.firebaseio.com/productos_idx.json')
            .subscribe( (resp : Producto[]) =>{
              this.cargando= false;
              this.productos= resp;

              resolve();
            })
    });
  }

  public getProductos(id: string){
    return this.http.get(`https://angular-html-fbd5c.firebaseio.com/productos/${id}.json`)
  }

  buscarProducto (termino: string){

    if (this.productos.length ===0 ) {
      //cargo productos
      this.cargarProductos().then ( () => {
        //Se ejecuta despues de tener los productos
        //Aplicar filtro
        this.filtrarProductos( termino);
      })
    }
    else{
      //Aplicar filtro
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string){
      this.productosFiltrados=[];
      console.log("termino=" + termino);
      console.log(this.productos);

      termino= termino.toLocaleLowerCase();


      this.productos.forEach ( prod=> {

        const tituloLower= prod.titulo.toLocaleLowerCase();

        if ( prod.categoria.indexOf ( termino ) >=0 || tituloLower.indexOf ( termino )>=0 ){
          this.productosFiltrados.push( prod)
        }
      })

  }
}
