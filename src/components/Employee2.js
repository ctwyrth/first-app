import React, { useEffect, useState } from 'react'

const Employee2 = () => {
   const [employees, setEmployees] = useState([]);

   useEffect(() => {
      setEmployees([{name: "John", age: 23}, {name: "Brianna", age: 33}, {name: "Carry", age: 19}]);
   }, []);


   return (
      employees.map((employee, idx) => (
         <div className="card" key={idx}>
            <div className="card-body">
               <h2>NAME: {employee.name}</h2>
               <h3>AGE: {employee.age}</h3>
            </div>
         </div>
      ))
   );
}

export default Employee2;