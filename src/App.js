import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import ApiNinja from './components/apicall';

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <div><Calculator /></div>
      <div><ApiNinja /></div>
    </div>
  );
}

export default App;
