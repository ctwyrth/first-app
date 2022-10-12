import React, { Fragment, useState } from 'react'

const RegisterForm = () => {
   const [ state, setState ] = useState({
      user: {
         username: '',
         email: '',
         password: '',
         jobtitle: '',
         biography: '',
         terms: false,
      }
   })

   let { user } = state;

   let handleFormUpdate = (e) => {
      setState((state) => ({
         user: {
            ...state.user,
            [e.target.name]: e.target.value
         }
      }));
   }
   
   let handleFormCheckUpdate = (e) => {
      setState((state) => ({
         user: {
            ...state.user,
            [e.target.name]: e.target.checked
         }
      }));
   }

   let handleOnSubmit = (e) => {
      e.preventDefault();
      console.log(user);
   }

   return (
      <Fragment>
         {/* <pre>{JSON.stringify(state.user)}</pre> */}
         <div className="container mt-4">
            <div className="row">
               <div className="col-md-3">
                  <div className="card shadow">
                     <div className="card-header bg-warning text-white">Register Here:</div>
                     <div className="card-body">
                        <form onSubmit={handleOnSubmit}>
                           <div className="mb-3">
                              <input type="text" onChange={handleFormUpdate} name="username" id="username" className="form-control" placeholder="Username..." value={user.username} />
                           </div>
                           <div className="mb-3">
                              <input type="email" onChange={handleFormUpdate} name="email" id="email" className="form-control" placeholder="Email..." value={user.email} />
                           </div>
                           <div className="mb-3">
                              <input type="password" onChange={handleFormUpdate} name="password" id="password" className="form-control" placeholder="Password..." value={user.password} />
                           </div>
                           <div className="mb-3">
                              <select onChange={handleFormUpdate} name="jobtitle" id="jobtitle" className="form-control">
                                 <option value="">Select Designation</option>
                                 <option value="Software Engineer">Software Engineer</option>
                                 <option value="Sr. Software Engineer">Sr. Software Engineer</option>
                                 <option value="Tech Lead">Tech Lead</option>
                                 <option value="Project Manager">Project Manager</option>
                                 <option value="Director">Director</option>
                              </select>
                           </div>
                           <div className="mb-3">
                              <textarea onChange={handleFormUpdate} name="biography" id="biography" rows={4} className="form-control" placeholder="Biography..." value={user.biography} />
                           </div>
                           <div className="mb-3">
                              <input type="checkbox" onChange={handleFormCheckUpdate} name="terms" id="terms" className="form-check-input" /> Accept Terms
                           </div>
                           <input type="submit" value="Register" className="btn btn-warning btn-sm" />
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   )
}

export default RegisterForm;;