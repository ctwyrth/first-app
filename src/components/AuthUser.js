import React, { Fragment, useState } from 'react';

const AuthUser = () => {
   const [ state, setState ] = useState({
      isLoggedIn: false,
   });

   let { isLoggedIn } = state;

   let handleLoggingClick = (e) => {
      e.preventDefault();
      e.target.name === "login" ? setState({ isLoggedIn: true }) : setState({ isLoggedIn: false });
   }

   return (
      <Fragment>
         <div className="container mt-4">
            <div className="row">
               <div className="col-md-5">
                  <div className="card shadow">
                     <div className="card-body">
                        {
                           isLoggedIn ? 
                              <p className="h3">Welcome Mr. WYRTH</p> : 
                              <p className="h3">Welcome Guest!</p>
                        }
                        {
                           isLoggedIn ? 
                              <button name="logout" onClick={handleLoggingClick} className="btn btn-sm btn-warning">Logout</button> : 
                              <button name="login" onClick={handleLoggingClick} className="btn btn-sm btn-success">Login</button>
                        }
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   )
}

export default AuthUser;