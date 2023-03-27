import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../models/comentario';


@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  url='http://localhost:3080/comentario/';

  constructor(private http: HttpClient) { }

  getPublicacion(id:string){
    return this.http.get(this.url + id);
  }

  getComentarios(id: string): Observable<any>{
    return this.http.get(this.url + id + '/comentarios');
  }

  addComentario(id: string, nuevoComen:Comentario): Observable<any>{
    return this.http.post(this.url + id + '/comentarios',nuevoComen);
  }

  eliminarComent(idP: string, idC: string): Observable<any>{
    return this.http.delete(this.url + idP + '/comentarios/'+ idC);
  }
}
