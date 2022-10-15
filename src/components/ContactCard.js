import React, { Fragment, useState } from 'react';

import ContactService from '../services/ContactService';

const ContactCard = (props) => {
   let contact = props.selected;

   return (
      <Fragment>
         { contact && 
            <div className="card shadow sticky-top">
               <img src={contact.picture.large} alt={contact.name.first} className="image-fluid" />
               <div className="card-body">
                  <ul className="list-group">
                     <li className="list-group-item">{contact.name.title}. {contact.name.first} {contact.name.last}</li>
                     <li className="list-group-item">{contact.email}</li>
                     <li className="list-group-item">{contact.dob.age} yrs.</li>
                     <li className="list-group-item">{contact.location.city}</li>
                  </ul>
               </div>
            </div>
         }
      </Fragment>
   );
}

export default ContactCard;