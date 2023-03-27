import { PublicacionService } from 'src/app/services/publicacion.service';
import { Component, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/models/publicacion';

@Component({
  selector: 'app-rechazados',
  templateUrl: './rechazados.component.html',
  styleUrls: ['./rechazados.component.css']
})
export class RechazadosComponent implements OnInit{
  listPublicacion: Publicacion[]=[];

  constructor(private _publicacionService: PublicacionService){}

  ngOnInit(): void {
    this.getPublicaciones();
  }

  getPublicaciones(){
    this._publicacionService.getPubNoValidas().subscribe(data=>{
      console.log(data);
      this.listPublicacion=Object.values(data);
    }, error =>{
      console.log(error);
    })
  }

}
