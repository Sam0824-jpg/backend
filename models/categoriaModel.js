const db = require('../config/db');

const Categoria = {
    getAll: (callback) => db.query('SELECT * FROM categorias', callback),
    getById: (id, callback) => db.query('SELECT * FROM categorias WHERE id = ?', [id], callback),
    create: (data, callback) => db.query('INSERT INTO categorias SET ?', [data], callback),
    update: (id, data, callback) => db.query('UPDATE categorias SET ? WHERE id = ?', [data, id], callback),
    delete: (id, callback) => db.query('DELETE FROM categorias WHERE id = ?', [id], callback),
    // ENDPOINT EXTRA: Buscar categoría por nombre
    searchByName: (nombre, callback) => db.query('SELECT * FROM categorias WHERE nombre LIKE ?', [`%${nombre}%`], callback)
};
module.exports = Categoria;