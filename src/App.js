import React from 'react';
import './App.css';
import Jumbo from './components/Jumbotron';
import Info from './components/Info';
import Card from './components/Card'

function App() {
  return (
    <React.Fragment>
      <Jumbo />
      <Info />
      <Card />
    </React.Fragment>
  );
};

export default App;
