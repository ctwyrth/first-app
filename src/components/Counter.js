import React, { useState } from 'react';

const Counter = () => {
   const [count, setCount] = useState(0);

   const handleIncrement = (e) => {
      e.preventDefault();
      setCount(count + 1);
   }

   const handleDecrement = (e) => {
      e.preventDefault();
      setCount(count - 1);
   }

   return (
      <React.Fragment>
         <div className="container mt-3">
            <div className="row">
               <div className="col-md-3">
                  <div className="card">
                     <div className="card-header bg-primary">
                        <p className="h4">Counter</p>
                     </div>
                     <div className="card-body">
                        <h5 className="display-3">{count}</h5>
                        <button className="btn btn-sm btn-success" onClick={handleIncrement}>Increment</button>
                        <button className="btn btn-sm btn-warning" onClick={handleDecrement}>Decrement</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}

export default Counter