import React, { Fragment } from 'react';

import './App.css';

import LoginForm from './components/LoginForm';

function App() {
   return (
      <Fragment>
         <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a href="/" className="navbar-brand ms-2">React with Form Handling</a>
         </nav>
         <LoginForm />
      </Fragment>
   );
}

export default App;
