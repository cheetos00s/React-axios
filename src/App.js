import logo from './logo.svg';
import './App.css';
import LoginComponent from './LoginComponent';
import FacturasComponent from './FacturasComponent';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <h1>Login Page</h1>
      <LoginComponent />
      <FacturasComponent/>
    </div>
  );
}

export default App;
