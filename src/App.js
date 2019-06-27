import React from 'react';
import './App.css';
import Nav from './components/Navbar'
import Jumbo from './components/Jumbotron';
import Info from './components/Info';
import Card from './components/Card'

function App() {
  return (
    <React.Fragment>
      {/* <Nav /> */}
      <Jumbo />
      <Info />
      <Card />
    </React.Fragment>
  );
};

export default App;
