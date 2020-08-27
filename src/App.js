import React from 'react';

import products from './data/fokusvarer.json';
import varegrupper from './data/varegrupper.json';

import Example from './components/Example';

import './App.css';

function App() {
  console.log(products);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Check console to see logs </p>
        <Example>Good luck and have fun :) </Example>
      </header>
    </div>
  );
}

export default App;
