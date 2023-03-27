export class Comentario{
    _id?:string;
    usuario?: string;
    fechaPubC?: Date;
    contenidoC: string;
    

    constructor(id: string, contenidoC: string, usuario: string, fechaPubC: Date){
        this.contenidoC = contenidoC;
        this.usuario = usuario;
        this.fechaPubC = fechaPubC;
        this._id = id;
    }
}