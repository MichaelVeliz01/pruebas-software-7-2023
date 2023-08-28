import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Productos } from '../entidades/producto';
import { ProductoService } from '../servicios-backend/productos/producto.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
    
  public nombre = "";
  public idCategoria: number | undefined;
  public listProducto: Productos[] = []

  constructor(private ProductoService:ProductoService) {
    this.GetProducto();
  }

  public GetProducto(){
    this.ProductoService.GetProducto().subscribe({
      next: (response: HttpResponse<any>) => {
          this.listProducto = response.body;
      },
      error: (error: any) => {
          console.log(error);
      },
  });  
  }

  public addProducto(){
    if (this.idCategoria !== undefined) { // Verifica si idCategoria tiene un valor antes de usarlo
      this.AddProductoBackend(this.nombre, this.idCategoria);
    } else {
      console.log("idCategoria no tiene un valor válido.");
    }
  }
  public AddProductoBackend(nombre: string, idCategoria: number | undefined ) {
    if (idCategoria !== undefined) {
    var productoEntidad = new Productos();
    productoEntidad.nombre = nombre;
    productoEntidad.idCategoria = idCategoria; 

    this.ProductoService.AddProducto(productoEntidad).subscribe({
      next: (response: HttpResponse<any>) => {
          console.log(response.body)
          if(response.body == 1){
              alert("Se agrego el PRODUCTO con exito :)");
              this.GetProducto();//Se actualize el listado
              this.nombre = "";

          }else{
              alert("Al agregar PRODUCTO fallo exito :(");
          }
      },
      error: (error: any) => {
          console.log(error);
      },
      complete: () => {
          console.log('complete - this.AddProducto()');
      },
  });
  } else {
  console.log("idCategoria no tiene un valor válido.");
  }
  }
 }

  
