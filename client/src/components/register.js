// Register.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const history = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/user/register', {
        username,
        password,
        email,
      });

      // Assuming the server sends a success message upon successful registration
      console.log(response.data.message);

      // Redirect to login page after successful registration
      history.push('/login');
    } catch (error) {
        console.error('Error registering:', error.response.data.error || error.message);
      // Handle registration error, show an alert, or update the UI accordingly
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
