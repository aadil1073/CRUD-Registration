const Registration = require('../models/registrationModel');

exports.createRegistration = (req, res) => {
  const { name, email, dob } = req.body;
  if (!name || !email || !dob) {
    return res.status(400).json({ error: 'Please provide all required fields' });
  }

  Registration.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Registration created successfully', data: result });
  });
};

exports.getAllRegistrations = (req, res) => {
  Registration.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.updateRegistration = (req, res) => {
  const { id } = req.params;
  const { name, email, dob } = req.body;
  if (!name || !email || !dob) {
    return res.status(400).json({ error: 'Please provide all required fields' });
  }

  Registration.update(id, req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Registration updated successfully', data: result });
  });
};

exports.deleteRegistration = (req, res) => {
  const { id } = req.params;

  Registration.delete(id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Registration deleted successfully', data: result });
  });
};
