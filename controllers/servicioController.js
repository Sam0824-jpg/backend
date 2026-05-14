const Servicio = require('../models/servicioModel');

exports.getAll = (req, res) => Servicio.getAll((err, results) => res.json(results));
exports.getById = (req, res) => Servicio.getById(req.params.id, (err, results) => res.json(results));
exports.create = (req, res) => {
    // Validación de negocio: El precio no puede ser negativo
    if (req.body.precio_base < 0) return res.status(400).json({ mensaje: 'El precio no puede ser negativo' });
    Servicio.create(req.body, (err, result) => res.status(201).json({ mensaje: 'Servicio creado', id: result.insertId }));
};
exports.update = (req, res) => Servicio.update(req.params.id, req.body, (err, result) => res.json({ mensaje: 'Actualizado' }));
exports.delete = (req, res) => Servicio.delete(req.params.id, (err, result) => res.json({ mensaje: 'Eliminado' }));
// ENDPOINT EXTRA
exports.getByPrestador = (req, res) => Servicio.getByPrestador(req.params.prestador_id, (err, results) => res.json(results));