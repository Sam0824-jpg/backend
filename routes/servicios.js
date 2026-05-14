const express = require('express');
const router = express.Router();
const servicioCtrl = require('../controllers/servicioController');
const verificarToken = require('../middlewares/authMiddleware');

// Rutas CRUD estándar
router.get('/', verificarToken, servicioCtrl.getAll);
router.get('/:id', verificarToken, servicioCtrl.getById);
router.post('/', verificarToken, servicioCtrl.create);
router.put('/:id', verificarToken, servicioCtrl.update);
router.delete('/:id', verificarToken, servicioCtrl.delete);

// RUTA EXTRA: Ver todos los servicios de un prestador específico
router.get('/prestador/:prestador_id', verificarToken, servicioCtrl.getByPrestador);

module.exports = router;