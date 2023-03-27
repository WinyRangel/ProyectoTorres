export class Publicacion{
    _id?:string;
    usuario: string;
    fechaPub?: Date;
    contenido: string;
    titulo: string;
    validado?: boolean;
    categoria: string;
    comentario?: Array<any>;
    retroalim?: string;

    constructor(id:string, usuario: string, fechaPub:Date, contenido: string, titulo:string, validado:boolean,categoria:string){
        this._id= id;
        this.usuario = usuario;
        this.fechaPub= fechaPub;
        this.contenido = contenido;
        this.titulo= titulo;
        this.validado= validado;
        this.categoria = categoria;
    }
}