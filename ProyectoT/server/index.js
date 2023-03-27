const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

const { mongoose } = require('./database');

//settings
app.set('port', process.env.PORT || 3060);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//routes
//app.use('/comentario',require('./routes/comentario.routes'));
//app.use('/publicacion',require('./routes/publicacion.routes'));



//starting server
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
})