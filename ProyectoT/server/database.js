const mongoose = require('mongoose');

const URI ='mongodb://localhost/contenido_f';

mongoose.connect(URI)
.then(db => console.log('DB is connected'))
.catch(err => console.console.error(err));
module.exports = mongoose;