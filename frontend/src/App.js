import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RegistrationForm from './components/RegistrationForm';
import RegistrationList from './components/RegistrationList';

function App() {
  const [currentRegistration, setCurrentRegistration] = useState(null);
  const [registrations, setRegistrations] = useState([]);

  // Function to fetch all registrations from the backend
  const fetchRegistrations = () => {
    axios.get('http://localhost:5000/api/registration')
      .then((res) => setRegistrations(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchRegistrations();
  }, []); 

  return (
    <div className="App">
      <h1>CRUD App - Registration</h1>
      <RegistrationForm 
        fetchRegistrations={fetchRegistrations}
        currentRegistration={currentRegistration}
        setCurrentRegistration={setCurrentRegistration}
      />
      <RegistrationList 
        registrations={registrations}
        setCurrentRegistration={setCurrentRegistration}
        fetchRegistrations={fetchRegistrations}
      />
    </div>
  );
}

export default App;
