import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const NavBar = () => {
   return (
      <Fragment>
         <nav className="navbar navbar-dark bg-primary">
            <h3 className="text-white ms-3 mx-3">React Routing</h3>
         </nav>
         <Outlet />
      </Fragment>
   )
}

export default NavBar;