const pool = require('../config/db');

const Registration = {
  create: (data, callback) => {
    const query = 'INSERT INTO Registration (name, email, dob) VALUES ($1, $2, $3) RETURNING *';
    pool.query(query, [data.name, data.email, data.dob], (err, result) => {
      if (err) return callback(err);
      callback(null, result.rows[0]);
    });
  },

  getAll: (callback) => {
    const query = 'SELECT * FROM Registration';
    pool.query(query, (err, result) => {
      if (err) return callback(err);
      callback(null, result.rows);
    });
  },

  update: (id, data, callback) => {
    const query = 'UPDATE Registration SET name = $1, email = $2, dob = $3 WHERE id = $4 RETURNING *';
    pool.query(query, [data.name, data.email, data.dob, id], (err, result) => {
      if (err) return callback(err);
      callback(null, result.rows[0]);
    });
  },

  delete: (id, callback) => {
    const query = 'DELETE FROM Registration WHERE id = $1 RETURNING *';
    pool.query(query, [id], (err, result) => {
      if (err) return callback(err);
      callback(null, result.rows[0]);
    });
  }
};

module.exports = Registration;
