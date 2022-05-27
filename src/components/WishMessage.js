import React, { useState } from 'react'

const WishMessage = () => {
   const [greeting, setGreeting] = useState("Hello");

   const handleClick = (value) => {
      if (value === "gm") {
         setGreeting("Good Morning!");
      } else if (value === "ga") {
         setGreeting("Good Afternnon!");
      } else if (value === "ge") {
         setGreeting("Good Evening!");
      }
   }

   return (
      <React.Fragment>
         <div className="container mt-3">
            <div className="row">
               <div className="col-md-6">
                  <div className="card">
                     <div className="card-header bg-secondary text-white">
                        <p className="h4">WishMessage</p>
                     </div>
                     <div className="card-body">
                        <h5 className="display-3">{greeting}</h5>
                        <button className="btn btn-sm btn-success" onClick={() => handleClick("gm")}>Good Morning</button>
                        <button className="btn btn-sm btn-warning" onClick={() => handleClick("ga")}>Good Afternoon</button>
                        <button className="btn btn-sm btn-danger" onClick={() => handleClick("ge")}>Good Evening</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}

export default WishMessage;