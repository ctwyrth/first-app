import React, { Fragment } from 'react';

import './App.css';
import ProductCart from './components/ProductCart';

function App() {
   return (
      <Fragment>
         <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a href="/" className="navbar-brand ms-4">React with Conditional & List Rendering</a>
         </nav>
         <ProductCart />
      </Fragment>
   );
}

export default App;
