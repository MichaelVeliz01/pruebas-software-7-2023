import { Component } from '@angular/core';
import { CategoriaProducto } from '../entidades/CategoriaProducto';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public nombre = ""


  public listaCategoria: CategoriaProducto[] = []

  constructor() {

    let categoriaproducto: CategoriaProducto = new CategoriaProducto();
    //categoriaproducto.nombre = "Computadora";
    categoriaproducto.nombre = "Computadora";


    this.listaCategoria.push(categoriaproducto);
    
  }

  public addCategoria(){

  }

  

}
