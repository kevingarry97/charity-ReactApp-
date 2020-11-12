import React from 'react';
import { Switch } from 'react-router-dom';
import './app.css';
import Routes from './components/routes/route';

function App() {
  return (
    <Switch>
      <Routes />
    </Switch>
  );
}

export default App;
