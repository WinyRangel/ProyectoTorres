import { Component, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/models/publicacion';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PublicacionService } from '../../services/publicacion.service';

@Component({
  selector: 'app-administrar',
  templateUrl: './administrar.component.html',
  styleUrls: ['./administrar.component.css']
})
export class AdministrarComponent implements OnInit {
  retroalimentarForm : FormGroup;
  publicacion : Publicacion = {
    usuario : '',
    fechaPub : new Date(),
    contenido : '',
    validado : false,
    categoria : '',
    retroalim : '',
    titulo : ''
  }
  id : string | null;

  constructor(private _contenidoService : PublicacionService, aRouter : ActivatedRoute,
  private fb : FormBuilder, private router : Router) {
    this.retroalimentarForm = fb.group({
      validado : ['', Validators.required],
      retroalim : ['', Validators.required]
    }),
    this.id = aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.obtenerPublicacion(this.id);
  }

  obtenerPublicacion(id : any) {
    this._contenidoService.getPublicacion(this.id).subscribe(data => {
      console.log(data);
      this.publicacion = {
        usuario : data[0].usuario,
        fechaPub : data[0].fechaPub,
        contenido : data[0].contenido,
        titulo : data[0].titulo,
        categoria : data[0].categoria,
        retroalim : data[0].retroalim
      }
    })
  } // Obtener la publicación

  agregarRetroalim() {
    this._contenidoService.getPublicacion(this.id).subscribe(data => {
      console.log(data);
      this.publicacion = {
        usuario : data[0].usuario,
        fechaPub : data[0].fechaPub,
        contenido : data[0].contenido,
        titulo : data[0].titulo,
        categoria : data[0].categoria,
        retroalim : this.retroalimentarForm.get('retroalim')?.value,
        validado : this.retroalimentarForm.get('validado')?.value
      }
      this._contenidoService.putAdminComment(this.id, this.publicacion).subscribe(data => {})
    })
    this.router.navigate(['']);
  }
}