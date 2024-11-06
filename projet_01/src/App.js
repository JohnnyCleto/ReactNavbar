import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from './components/button';
import Hello from './components/Blue';
import Navbar from './components/Navbar';


function App() {
  return (
    // <div className="App">
    //     <Button>Clique Aqui</Button>
    // </div>
    // <div>
    //   <Hello name="Sky" name2="Sara"  />
    // </div>
    <div className="App">
    <Navbar />
    </div>
  );
}

export default App;
