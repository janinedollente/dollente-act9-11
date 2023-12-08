// App.js
import React from 'react';
import LoginForm from './components/LoginForm';
import { appContainerStyles, containerStyles, logoStyles } from './styles/AppStyles';

const App = () => {
  return (
    <div style={appContainerStyles}>
      <div style={containerStyles}>
        <LoginForm />
      </div>
    </div>
  );
};

export default App;
