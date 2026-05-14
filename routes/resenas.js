const express = require('express');
const router = express.Router();
const resenaCtrl = require('../controllers/resenaController');
const verificarToken = require('../middlewares/authMiddleware');

// Rutas CRUD estándar
router.get('/', verificarToken, resenaCtrl.getAll);
router.get('/:id', verificarToken, resenaCtrl.getById);
router.post('/', verificarToken, resenaCtrl.create);
router.put('/:id', verificarToken, resenaCtrl.update);
router.delete('/:id', verificarToken, resenaCtrl.delete);

// RUTA EXTRA: Calcular el promedio de estrellas de un trabajador
router.get('/promedio/:prestador_id', verificarToken, resenaCtrl.getPromedio);

module.exports = router;