import { Component } from '@angular/core';
import { Publicacion } from 'src/app/models/publicacion';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent {
  listPublicacion: Publicacion[]=[];
  publicacionForm : FormGroup;

  constructor(private _publicacionService : PublicacionService, private fb : FormBuilder) {
    this.publicacionForm = fb.group({
      titulo : ['', Validators.required],
      categoria : ['', Validators.required],
      contenido : ['', Validators.required]
    })
  }

  getPublicaciones(){
    this._publicacionService.getPublicaciones().subscribe(data=>{
      console.log(data);
      this.listPublicacion=Object.values(data);
    }, error =>{
      console.log(error);
    })
  }

  eliminarPublicacion(id:any){
    this._publicacionService.eliminarPublicacion(id).subscribe(data=>{
      console.log('Publicación eliminada');
    }, error => {
      console.log(error);
    })
  }

  agregarPublicacion() {
    var c = this.publicacionForm.get('titulo')?.value;
    var cat = "";
    switch (c) {
      case 1:
        cat = "Java"
        break;
      case 2:
        cat = "HTML"
        break;
      case 3:
        cat = "JavaScript"
        break;
      default:
        cat = "-Seleccionar-"
    }
    const PUB : Publicacion = {
      usuario : 'usuario1',
      fechaPub : new Date(),
      contenido : this.publicacionForm.get('contenido')?.value,
      validado : false,
      categoria : cat,
      titulo : this.publicacionForm.get('titulo')?.value
    }
    this._publicacionService.crearPublicacion(PUB).subscribe(data => {
      console.log('Publicación agregada');
    }, error => {
      console.log(error);
    })
  }

} 