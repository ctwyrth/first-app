import React, { Fragment } from 'react'

const Student = (props) => {
   return (
      <Fragment>
         <div className="card">
            <div className="card-body">
               <h2>Welcome {props.name}!</h2>
               <h3>Course: {props.course}</h3>
               <pre>{JSON.stringify(props)}</pre>
            </div>
         </div>
      </Fragment>
   )
};

export default Student;