import React, { Fragment, useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
   const [ state, setState ] = useState({
      channel: 'Batman Industries',
      author: '',
   });

   let receiveData = (data) => {
      setState((state) => ({
         ...state,
         author: data,
      }));
   }

   return (
      <Fragment>
         <div className="container mt-4">
            <div className="row">
               <div className="col-md-8">
                  <div className="card shadow">
                     <div className="card-body bg-success text-white">
                        <p className="h4">ParentComponent</p>
                        <p>From Child: {state.author}</p>
                        <ChildComponent channel={state.channel} sendData={receiveData} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   )
}

export default ParentComponent;