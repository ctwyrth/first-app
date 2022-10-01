import React from 'react';

import './App.css';

import ProductItem from './components/ProductItem';

function App() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className="navbar-brand ms-2">React with Event Handling</a>
      </nav>
      <ProductItem />
    </React.Fragment>
  );
}

export default App;
