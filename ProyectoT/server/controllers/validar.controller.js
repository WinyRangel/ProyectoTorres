const Validar =  require('../models/comentario');
const validarCtrl = {};

validarCtrl.getPublicaciones = async (req, res) => {
    try{
        const publicaciones = await Validar.find();
        res.json(publicaciones);
    }catch (error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};
validarCtrl.validarPublicacion = async (req, res) => {
    try{
        const { }= req.body
    }catch (error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

module.exports = validarCtrl;