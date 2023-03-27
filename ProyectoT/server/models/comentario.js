const mongoose = require('mongoose');
const { Schema } = mongoose;





const comentarioSchema = new mongoose.Schema({
    usuario: {
      type: String,
      required: true
    },
    fechaPubC: {
        type: Date,
        default: Date.now()
    },
    contenidoC: {
        type: String,
        required: true
      }
  });

const PublicacionesSchema = new Schema({
    usuario:{
        type: String,
        require: true
    },
    fechaPub: {
        type: Date,
        default: Date.now()
    },
    contenido: {
        type: String,
        requird: true
    },
    validado: {
       type: Boolean,
        default: false
    },
    categoria: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    comentarios: [comentarioSchema]
});
    

module.exports = mongoose.model('Publicacion', PublicacionesSchema); //pasar el schema a un modelo de datos en mongoose