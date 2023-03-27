const express = require('express');
const router = express.Router();

const publiCtrl = require('../controllers/publicacion.controller');

router.get('/',publiCtrl.getPublicacionesValidadas);
router.get('/sinvalidar',publiCtrl.getPublicacionesNoValidadas);
router.get('/categoria/:categoria',publiCtrl.getPorCategoria);
router.get('/categoria',publiCtrl.getCategorias);
router.get('/:id', publiCtrl.obtenerPublicacion);
router.delete('/:id', publiCtrl.eliminarPublicacion);
router.post('/', publiCtrl.crearPublicacion);

module.exports = router;