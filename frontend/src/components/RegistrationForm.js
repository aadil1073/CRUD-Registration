import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RegistrationForm({ fetchRegistrations, currentRegistration, setCurrentRegistration }) {
  const [formData, setFormData] = useState({ name: '', email: '', dob: '' });

  // Update form data when currentRegistration changes
  useEffect(() => {
    if (currentRegistration) {
      setFormData(currentRegistration);
    } else {
      setFormData({ name: '', email: '', dob: '' });
    }
  }, [currentRegistration]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentRegistration) {
      // Update existing registration
      axios.put(`http://localhost:5000/api/registration/${currentRegistration.id}`, formData)
        .then((res) => {
          alert(res.data.message);
          fetchRegistrations();
          setCurrentRegistration(null);
        })
        .catch((err) => alert(err.response.data.error));
    } else {
      // Create new registration
      axios.post('http://localhost:5000/api/registration', formData)
        .then((res) => {
          alert(res.data.message);
          fetchRegistrations();
          setFormData({ name: '', email: '', dob: '' });
        })
        .catch((err) => alert(err.response.data.error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        required
      />
      <button type="submit">{currentRegistration ? 'Update' : 'Submit'}</button>
    </form>
  );
}

export default RegistrationForm;
