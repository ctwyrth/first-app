import React, { Fragment, useState } from 'react';

const ChildComponent = (props) => {
   const [ state, setState ] = useState({
      author: 'THOMAS WYRTH'
   });

   let handleButtonClick = () => {
      props.sendData(state.author);
   }

   return (
      <Fragment>
         <div className="container mt-4">
            <div className="row">
               <div className="col-md-8">
                  <div className="card shadow">
                     <div className="card-body bg-warning text-dark">
                        <p className="h4">ChildComponent</p>
                        <p>{props.channel}</p>
                        <button onClick={handleButtonClick} className="btn btn-sm btn-dark">Send</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   )
}

export default ChildComponent;