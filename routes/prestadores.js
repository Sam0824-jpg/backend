const express = require('express');
const router = express.Router();
const prestadorCtrl = require('../controllers/prestadorController');
const verificarToken = require('../middlewares/authMiddleware');

// Rutas protegidas con el middleware
router.get('/', verificarToken, prestadorCtrl.getAll);
router.post('/', verificarToken, prestadorCtrl.create);
// ... (agregar getById, put, delete) ...

// RUTA EXTRA DEL NEGOCIO
router.get('/zona/:zona', verificarToken, prestadorCtrl.getByZona);

module.exports = router;