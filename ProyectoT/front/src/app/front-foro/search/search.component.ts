import { Categoria } from '../../models/categoria';
import { Publicacion } from '../../models/publicacion';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  listPublicacion: Publicacion[]=[];
  listCategoria: Categoria[]=[];

  constructor(private _publicacionService: PublicacionService){}
  
  ngOnInit(): void {
    this.getPublicaciones();
    this.getCategorias();
  }

  getPublicaciones(){
    this._publicacionService.getPublicaciones().subscribe(data=>{
      console.log(data);
      this.listPublicacion=Object.values(data);
    }, error =>{
      console.log(error);
    })
  }

  getCategorias(){
    this._publicacionService.getCategorias().subscribe(data=>{
      console.log(data);
      this.listCategoria=Object.values(data);
    }, error =>{
      console.log(error);
    })
  }

  getPorCategoria(cat: any){
    this._publicacionService.getPorCategoria(cat).subscribe(data=>{
      console.log(data);
      this.listPublicacion=data;
    }, error =>{
      console.log(error);
    })
  }
  
}
