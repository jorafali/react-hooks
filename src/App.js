import React from 'react';
import './App.css';
import LoginForm from './authentication/components/LoginForm';
import UserDetails from './user/components/UserDetails';

function App() {
  return (
    <div className="App">
      <LoginForm></LoginForm>
      <UserDetails></UserDetails>
    </div>
  );
}

export default App;
