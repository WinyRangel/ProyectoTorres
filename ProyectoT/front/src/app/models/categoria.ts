export class Categoria{
    _id?:string;
    nomCategoria: string;
    

    constructor(id: string, nomCategoria: string){
        this.nomCategoria = nomCategoria;
        this._id = id;
    }
}