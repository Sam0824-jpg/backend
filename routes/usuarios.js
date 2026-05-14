const express = require('express');
const router = express.Router();
const usuarioCtrl = require('../controllers/usuarioController');
const verificarToken = require('../middlewares/authMiddleware');

// Rutas CRUD estándar
router.get('/', verificarToken, usuarioCtrl.getAll);
router.get('/:id', verificarToken, usuarioCtrl.getById);
router.put('/:id', verificarToken, usuarioCtrl.update);
router.delete('/:id', verificarToken, usuarioCtrl.delete);

// RUTA EXTRA: Filtrar usuarios por tipo de rol (cliente, prestador, admin)
router.get('/rol/:rol', verificarToken, usuarioCtrl.getByRol);

module.exports = router;