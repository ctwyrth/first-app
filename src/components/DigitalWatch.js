import React, { Fragment, useState } from 'react';
import { useEffect } from 'react';

const DigitalWatch = () => {
   const [ currentTime, setCurrentTime ] = useState(new Date().toLocaleTimeString());

   useEffect(() => {
      let interval = setInterval(() => {
         setCurrentTime(new Date().toLocaleTimeString());
      }, 1000);

      return () => {
         clearInterval(interval);
      }
   }, [])

   return (
      <Fragment>
         <div className="container mt-4">
            <div className="row">
               <div className="col-md-6">
                  <div className="card shadow text-center">
                     <div className="card-header bg-warning">
                        <p className="h4 my-2">Digital Watch</p>
                     </div>
                     <div className="card-body">
                        <h3 className="display-4">{currentTime}</h3>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   )
}

export default DigitalWatch;