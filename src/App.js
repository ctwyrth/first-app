import React, { Fragment } from 'react';

import './App.css';
import DigitalWatch from './components/DigitalWatch';

function App() {
   return (
      <Fragment>
         <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a href="/" className="navbar-brand ms-4">React with LifeCycle Methods</a>
         </nav>
         <DigitalWatch />
      </Fragment>
   );
}

export default App;

// https://gist.githubusercontent.com/thenaveensaggam/fe5a67531d964f8c17fc92f0c70ced21/raw/f7c43379ec32421c871a57f832e314dd8e5d92f7/contacts.15.6.2021.json
