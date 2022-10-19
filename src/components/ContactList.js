import React, { Fragment, useState } from 'react';
import { useEffect } from 'react';

import ContactService from '../services/ContactService';

const ContactList = (props) => {
   const [ state, setState ] = useState({
      contacts: []
   });

   useEffect(() => {
      async function fetchData() {
         let response = {};

         try {
            response = await ContactService.getContactList();
            setState(() => ({
               contacts: response.data
            }));
         }
         catch (error) {
            console.log(error);
         }
         return () => {
            response = null;
         }
      };

      fetchData();
   }, []);

   let { contacts } = state;

   let handleRowClick = (contact) => {
      props.data(contact);
   }

   return (
      <Fragment>
         <table className="table table-hover text-center table-striped">
            <thead className="bg-dark text-white">
               <tr>
                  <th scope="col">SNO</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Location</th>
               </tr>
            </thead>
            <tbody>
               { contacts?.map((contact, idx) => {
                  return (
                     <tr onClick={() => handleRowClick(contact)} key={contact.login.uuid}>
                        <td>{idx + 1}</td>
                        <td>{contact.name.first} {contact.name.last}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.location.city}</td>
                     </tr>
                  );
               }) }
            </tbody>
         </table>
      </Fragment>
   )
}

export default ContactList;