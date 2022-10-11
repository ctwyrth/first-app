import React, { Fragment, useState } from 'react';

const Form = () => {
   const [ name, setName ] = useState('');

   let handleNameChange = (e) => {
      setName(e.target.value);
   }

   return (
      <Fragment>
         <div className="container mt-3">
            <div className="row">
               <div className="col-md-3">
                  <div className="card shadow">
                     <div className="card-header bg-primary text-white">
                        <p className="h4 my-1">User Name</p>
                     </div>
                     <div className="card-cody bg-light">
                        <form className="p-3">
                           <div className="mb-3">
                              <input type="text" onChange={handleNameChange} className="form-control" value={name} />
                           </div>
                           <h4>{name}</h4>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
}

export default Form;
