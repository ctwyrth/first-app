import React, { Fragment } from 'react';

import './App.css';

import ShoppingCart from './components/ShoppingCart';

function App() {
   return (
      <Fragment>
         <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a href="/" className="navbar-brand ms-2">React with Event Handling</a>
         </nav>
         <ShoppingCart />
      </Fragment>
   );
}

export default App;
