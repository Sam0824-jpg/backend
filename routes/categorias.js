const express = require('express');
const router = express.Router();
const categoriaCtrl = require('../controllers/categoriaController');
const verificarToken = require('../middlewares/authMiddleware');

router.get('/', verificarToken, categoriaCtrl.getAll);
router.get('/:id', verificarToken, categoriaCtrl.getById);
router.post('/', verificarToken, categoriaCtrl.create);
router.put('/:id', verificarToken, categoriaCtrl.update);
router.delete('/:id', verificarToken, categoriaCtrl.delete);
router.get('/buscar/:nombre', verificarToken, categoriaCtrl.searchByName); // RUTA EXTRA

module.exports = router;