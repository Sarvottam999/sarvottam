// LoginRegistration.js

import React, { useState } from 'react';

const LoginRegistration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Logic for handling login
  };

  const handleRegistration = () => {
    // Logic for handling registration
  };

  return (
    <div className="login-registration">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
}

export default LoginRegistration;
