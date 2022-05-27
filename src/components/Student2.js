import React, { useState } from 'react';

const Student2 = () => {
   const [state, setState] = useState({
      students: [
         {name: "John", course: "BTech"},
         {name: "Sponge Bob", course: "MBBS"}
      ]
   });

   const {students} = state;

   return (
      students.map((student, id) => (
         <div className="card" key={id}>
            <div className="card-body">
               <span>NAME: {student.name}</span><br />
               <span>COURSE: {student.course}</span>
            </div>
         </div>
      ))
   );
}

export default Student2