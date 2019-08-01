import React from 'react';
import './App.css';
import Navi from './components/Navbar'
import Jumbo from './components/Jumbotron';
import Info from './components/Info';
import Card from './components/Card'

function App() {
  return (
    <React.Fragment>
      <Navi />
      <Jumbo />
      <Info />
      <Card />
    </React.Fragment>
  );
};

export default App;
