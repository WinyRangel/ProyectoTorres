const Publicacion = require('../models/comentario');
const Categoria = require('../models/categoria')
const publiCtrl = {};

publiCtrl.getPublicacionesValidadas = async (req, res) =>{
    const publicaciones = await Publicacion.find({validado: true});
    res.json(publicaciones);
}

publiCtrl.getPublicacionesNoValidadas = async (req, res) =>{
    const publicaciones = await Publicacion.find({validado: false});
    res.json(publicaciones);
}

publiCtrl.getCategorias = async (req,res)=>{
    const categorias = await Categoria.find();
    res.json(categorias);
}

publiCtrl.getPorCategoria = async (req, res) =>{
    const publicaciones = await Publicacion.find({categoria: req.params.categoria, validado:true});
    res.json(publicaciones);
}

exports.obtenerPublicacion = async (req, res) => {
    try {
        let publicacion = await Publicacion.find({_id : req.params.id});
        if (!publicacion) {
            res.status(404).json({msg : 'La publicacion en cuestión no existe'});
        }
        res.json(publicacion);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al actualizar los datos');
    }
}

exports.eliminarPublicacion = async (req, res) => {
    try {
        let publicacion = await Publicacion.findById(req.params.id);
        if (!publicacion) {
            res.status(404).json({msg : 'La publicacion en cuestión no existe'});
        }
        await Publicacion.findOneAndRemove({_id : req.params.id});
        res.json({msg : 'Publicacion eliminada'});
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al eliminar la publicacion');
    }
}

// Nueva publicación
exports.crearPublicacion = async (req, res) => {
    try {
        let publicacion;
        // Creacion de la publicacion
        publicacion = new Publicacion(req.body);
        await publicacion.save();
        res.send(publicacion);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al insertar en la base de datos');
    }
}

module.exports = publiCtrl; 