import React from 'react';
import axios from 'axios';
import './RegistrationList.css';

function RegistrationList({ registrations, setCurrentRegistration, fetchRegistrations }) {

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/registration/${id}`)
      .then(() => fetchRegistrations())  
      .catch((err) => console.error(err));
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <ul className="registration-list">
      {registrations.map((reg) => (
        <li key={reg.id} className="registration-item">
          <span className="registration-name">{reg.name}</span>
          <span className="registration-email">{reg.email}</span>
          <span className="registration-dob">{formatDate(reg.dob)}</span>
          <div className="button-group">
            <button className="edit-button" onClick={() => setCurrentRegistration(reg)}>Edit</button>
            <button className="delete-button" onClick={() => handleDelete(reg.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default RegistrationList;
