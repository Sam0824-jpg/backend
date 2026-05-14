const Usuario = require('../models/usuarioModel');

exports.getAll = (req, res) => Usuario.getAll((err, results) => res.json(results));
exports.getById = (req, res) => Usuario.getById(req.params.id, (err, results) => res.json(results));
exports.update = (req, res) => {
    // Validación de negocio: No permitir actualizar el ID
    if (req.body.id) return res.status(400).json({ mensaje: 'No puedes modificar el ID del usuario' });
    Usuario.update(req.params.id, req.body, (err, result) => res.json({ mensaje: 'Usuario actualizado' }));
};
exports.delete = (req, res) => Usuario.delete(req.params.id, (err, result) => res.json({ mensaje: 'Usuario eliminado' }));
// ENDPOINT EXTRA
exports.getByRol = (req, res) => Usuario.getByRol(req.params.rol, (err, results) => res.json(results));