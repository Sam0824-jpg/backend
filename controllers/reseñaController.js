const Resena = require('../models/resenaModel');

exports.getAll = (req, res) => Resena.getAll((err, results) => res.json(results));
exports.getById = (req, res) => Resena.getById(req.params.id, (err, results) => res.json(results));
exports.create = (req, res) => {
    // Validación de negocio: La calificación debe ser de 1 a 5 estrellas
    if (req.body.calificacion < 1 || req.body.calificacion > 5) {
        return res.status(400).json({ mensaje: 'La calificación debe ser entre 1 y 5' });
    }
    Resena.create(req.body, (err, result) => res.status(201).json({ mensaje: 'Reseña creada', id: result.insertId }));
};
exports.update = (req, res) => Resena.update(req.params.id, req.body, (err, result) => res.json({ mensaje: 'Actualizada' }));
exports.delete = (req, res) => Resena.delete(req.params.id, (err, result) => res.json({ mensaje: 'Eliminada' }));
// ENDPOINT EXTRA
exports.getPromedio = (req, res) => Resena.getPromedio(req.params.prestador_id, (err, results) => res.json(results));