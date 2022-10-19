import React, { Fragment, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import EmployeeList from './modules/employees/components/EmployeeList';
import NavBar from './modules/layout/components/NavBar';
import Home from './modules/layout/components/Home';
import About from './modules/layout/components/About';
import UserLogin from './modules/users/components/UserLogin';
import UserRegister from './modules/users/components/UserRegister';
import PageNotFound from './modules/layout/components/PageNotFound';
// import ContactApp from './components/ContactApp';
// import UserList from './components/UserList';
// import DigitalWatch from './components/DigitalWatch';

function App() {
   return (
      <Fragment>
         <Routes>
            <Route path='/' element={<NavBar />}>
               <Route index element={<Home />} />
               <Route path='employees/list' element={<EmployeeList />} />
               <Route path='about' element={<About />} />
               <Route path='users/login' element={<UserLogin />} />
               <Route path='users/register' element={<UserRegister />} />
               <Route path='*' element={<PageNotFound />} />
            </Route>
         </Routes>
         
         {/* <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a href="/" className="navbar-brand ms-4">React with Routing</a>
         </nav> */}
         {/* <DigitalWatch /> */}
         {/* <UserList /> */}
         {/* <ContactApp /> */}
      </Fragment>
   );
}

export default App;

// https://gist.githubusercontent.com/thenaveensaggam/fe5a67531d964f8c17fc92f0c70ced21/raw/f7c43379ec32421c871a57f832e314dd8e5d92f7/contacts.15.6.2021.json
