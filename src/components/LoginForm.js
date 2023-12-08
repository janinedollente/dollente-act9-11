// LoginForm.js
import React, { useState } from 'react';
import { appContainerStyles, containerStyles, logoStyles, formStyles, inputStyles, labelStyles, buttonStyles } from '../styles/AppStyles';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    console.log('Logging in with:', username, password);
  };

  const handleCreateAccountClick = (e) => {
    e.preventDefault(); // Prevents the default behavior of the link
    // You can optionally display a message or perform other actions here
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <img src="/images/logo.jpg" alt="Logo" style={{ ...logoStyles, margin: '0 auto' }} />
      <h2 style={{ margin: '10px 0' }}>Login</h2>
      <label htmlFor="username" style={labelStyles}>Username</label>
      <input
        type="text"
        id="username"
        style={inputStyles}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      
      <label htmlFor="password" style={labelStyles}>Password</label>
      <input
        type="password"
        id="password"
        style={inputStyles}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="button"
        style={{
          ...buttonStyles,
          backgroundColor: buttonStyles.backgroundColor,
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
        onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyles.backgroundColor)}
        onClick={handleLogin}
      >
        Login
      </button>
      <div className="form-group" style={{ marginTop: '20px' }}>
        <a
          href="#"
          onClick={handleCreateAccountClick}
          style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s' }}
          onMouseOver={(e) => e.target.style.color = 'lightgray'}
          onMouseOut={(e) => e.target.style.color = 'white'}
        >
          Create Your Account
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
