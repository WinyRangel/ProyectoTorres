import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publicacion } from '../models/publicacion';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  url= 'http://localhost:3080/publicacion/';


  constructor(private http: HttpClient) { }

  getPublicaciones(): Observable<any>{
    return this.http.get(this.url);
  }

  getPublicacion(id:any) : Observable<any> {
    return this.http.get(this.url+id);
  }

  putAdminComment(id : any, publicacion : Publicacion) {
    return this.http.put(this.url + id, publicacion)
  }

  eliminarPublicacion(id : any): Observable<any>{
    return this.http.delete(this.url + id);
  }

  crearPublicacion(publicacion : Publicacion): Observable<any> {
    return this.http.post(this.url, publicacion);
  }

  getPubNoValidas(): Observable<any>{
    return this.http.get(this.url + '/sinvalidar');
  }

  getCategorias(): Observable<any>{
    return this.http.get(this.url + 'categoria');
  }

  getPorCategoria(cat: string): Observable<any>{
    return this.http.get(this.url+'categoria/'+cat);
  }
}
