const Categoria = require('../models/categoriaModel');

exports.getAll = (req, res) => Categoria.getAll((err, results) => res.json(results));
exports.getById = (req, res) => Categoria.getById(req.params.id, (err, results) => res.json(results));
exports.create = (req, res) => {
    // Validación de negocio: El nombre no puede estar vacío
    if (!req.body.nombre) return res.status(400).json({ mensaje: 'El nombre de la categoría es obligatorio' });
    Categoria.create(req.body, (err, result) => res.status(201).json({ mensaje: 'Categoría creada', id: result.insertId }));
};
exports.update = (req, res) => Categoria.update(req.params.id, req.body, (err, result) => res.json({ mensaje: 'Actualizada' }));
exports.delete = (req, res) => Categoria.delete(req.params.id, (err, result) => res.json({ mensaje: 'Eliminada' }));
// ENDPOINT EXTRA
exports.searchByName = (req, res) => Categoria.searchByName(req.params.nombre, (err, results) => res.json(results));