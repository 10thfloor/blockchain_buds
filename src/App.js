import React from 'react';
import './App.css';

function App({ address }) {
  return <div className="App">{JSON.stringify(address)}</div>;
}

export default App;
