import React, { useState } from 'react';
import {api} from './api/axiosConfig'; // Adjust the path accordingly

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Perform login
      const loginResponse = await api.login(username, password);

      // Assuming your login response includes authentication details (e.g., tokens),
      // you may extract and store them for subsequent requests.

      // For example, you might save the authentication token in your React state or local storage.

      console.log('Login successful:', loginResponse.data);
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error (e.g., display an error message)
    }
  };

  return (
    <div>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginComponent;