import React, { Fragment, useState } from 'react';
import ContactCard from './ContactCard';
import ContactList from './ContactList';

const ContactApp = () => {
   const [ selected, setSelected ] = useState();

   let receivedContact = (contact) => {
      setSelected(contact);
   }

   return (
      <Fragment>
         <div className="container mt-4">
            <div className="row">
               <div className="col">
                  <p className="h3 text-success">Contact List App</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur quia non tempore enim tempora odit obcaecati, omnis, nisi asperiores excepturi id amet sapiente ab veniam molestias corrupti vitae vel perferendis!</p>
               </div>
            </div>
         </div>
         <div className="container mt-3">
            <div className="row">
               <div className="col-md-9">
                  <ContactList data={receivedContact} />
               </div>
               <div className="col-md-3">
                  <ContactCard selected={selected} />
               </div>
            </div>
         </div>
      </Fragment>
   )
}

export default ContactApp;