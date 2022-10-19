import React, { Fragment, useState, useEffect } from 'react';
import UserService from '../services/UserService';

const UserList = () => {
   const [ users, setUsers] = useState([]);

   useEffect(() => {
      // UserService.getAllUsers()
      //    .then(res => setUsers(res.data))
      //    .catch(err => console.log(err));

      async function fetchData() {
         let response = {};

         try {
            response = await UserService.getAllUsers();
            // console.log(response.data);
            setUsers(response.data);
         }
         catch (error) {
            console.log(error);
         }
         return () => {
            response = null;
         }
      }

      fetchData();
   }, []);

   return (
      <Fragment>
         <div className="container mt-4">
            <div className="col">
               <div className="row">
                  <p className="h3 text-success">User List</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus commodi dolor nemo nobis optio. Eius, pariatur, esse asperiores dolores provident adipisci explicabo dolore nihil mollitia, cupiditate aperiam ut porro ipsam.</p>
               </div>
            </div>
         </div>
         <div className="container mt-3">
            <table className="table table-striped table-hover text-center">
               <thead className="bg-dark text-white">
                  <tr>
                     <th scope="col">ID</th>
                     <th scope="col">Name</th>
                     <th scope="col">Email</th>
                     <th scope="col">Street</th>
                     <th scope="col">City</th>
                     <th scope="col">Website</th>
                  </tr>
               </thead>
               <tbody>
                  {users?.map((user) => {
                     return (
                        <tr key={user.id}>
                           <td>{user.id}</td>
                           <td>{user.name}</td>
                           <td>{user.email}</td>
                           <td>{user.address.street}</td>
                           <td>{user.address.city}</td>
                           <td>{user.website}</td>
                        </tr>
                     )
                  })}
               </tbody>
            </table>
         </div>
      </Fragment>
   )
}

export default UserList;