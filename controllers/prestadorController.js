const Prestador = require('../models/prestadorModel');

// Obtener todos
exports.getAll = (req, res) => {
    Prestador.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

// Crear (Con validaciones de negocio reales)
exports.create = (req, res) => {
    const { usuario_id, categoria_id, telefono, zona_cobertura } = req.body;
    
    // Validación de negocio: El teléfono debe tener 10 dígitos para FyNe
    if (!telefono || telefono.length !== 10) {
        return res.status(400).json({ mensaje: 'El teléfono debe tener exactamente 10 dígitos.' });
    }

    Prestador.create(req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ mensaje: 'Prestador creado', id: result.insertId });
    });
};

// ... (Implementar getById, update y delete de manera similar) ...

// ENDPOINT EXTRA: Filtrar por Zona
exports.getByZona = (req, res) => {
    const zona = req.params.zona;
    Prestador.getByZona(zona, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ mensaje: 'No hay oficios en esta zona' });
        res.status(200).json(results);
    });
};