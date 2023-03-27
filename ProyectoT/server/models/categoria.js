const mongoose = require('mongoose');
const { Schema } = mongoose;

const CategoriaSchema = new Schema({
    nomCategoria:{
        type: String,
        require: true
    }
});
    

module.exports = mongoose.model('Categoria', CategoriaSchema); //pasar el schema a un modelo de datos en mongoose