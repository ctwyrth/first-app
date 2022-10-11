import React, { Fragment, useState } from 'react';

const LoginForm = () => {
   const [ state, setState ] = useState({
      user: {
         username: '',
         password: ''
      },
   });

   let { user } = state;

   let handleChange = (e) => {
      setState((state) => ({
         user: {
            ...state.user,
            [e.target.name]: e.target.value
         }
      }));
   }

   let handleOnSubmit = (e) => {
      e.preventDefault();
      console.log(user);
      setState({
         user: {
            username: '',
            password: ''
         },
      });
   }

   return (
      <Fragment>
         {/* <pre>{JSON.stringify(state)}</pre> */}
         <div className="container mt-5">
            <div className="row">
               <div className="col-md-3">
                  <div className="card shadow">
                     <div className="card-header bg-success text-white">
                        <p className="h4 my-1">Login Form</p>
                     </div>
                     <div className="card-cody bg-light">
                        <form className="p-3" onSubmit={handleOnSubmit}>
                           <div className="mb-3">
                              <label htmlFor="username" className="form-label">Username:</label>
                              <input type="text" id="username" name="username" onChange={handleChange} className="form-control" value={user.username} placeholder="Username..." />
                           </div>
                           <div className="mb-3">
                              <label htmlFor="password" className="form-label">Password:</label>
                              <input type="password" id="password" name="password" onChange={handleChange} className="form-control" value={user.password} placeholder="Password..." />
                           </div>
                           <button className="btn btn-sm btn-success">Login</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
}

export default LoginForm;
