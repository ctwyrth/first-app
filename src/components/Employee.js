import React, { Component } from 'react'

class Employee extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      console.log(this.props);
      return (
         <React.Fragment>
            <div className="card">
               <div className="card-body">
                  <h2>Welcome {this.props.name}!</h2>
                  <h3>Age: {this.props.age}yrs.</h3>
               </div>
            </div>
         </React.Fragment>
      )
   }
}

export default Employee;