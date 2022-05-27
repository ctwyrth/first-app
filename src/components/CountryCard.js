import React from 'react';

import image1 from '../assets/img/pexels-asad-photo-maldives-1450361.jpg';
import image2 from '../assets/img/pexels-harrison-fitts-9503807.jpg';
import image3 from '../assets/img/pexels-jimmy-chan-2537536.jpg';
import image4 from '../assets/img/pexels-pixabay-314937.jpg';

const CountryCard = () => {
   return (
      <React.Fragment>
         <div className="container mt-3">
            <div className="row">
               <div className="col-md-3">
                  <div className="card shadow">
                     <img src={image1} alt="" />
                     <div className="card-body">
                        <h3>Maldives</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem provident distinctio soluta iure culpa doloremque quidem, blanditiis doloribus ab ea?</p>
                        <button className="btn btn-sm btn-dark">Read More</button>
                     </div>
                  </div>
               </div>
               <div className="col-md-3">
                  <div className="card shadow">
                     <img src={image2} alt="" />
                     <div className="card-body">
                        <h3>Chicago</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem provident distinctio soluta iure culpa doloremque quidem, blanditiis doloribus ab ea?</p>
                        <button className="btn btn-sm btn-dark">Read More</button>
                     </div>
                  </div>
               </div>
               <div className="col-md-3">
                  <div className="card shadow">
                     <img src={image3} alt="" />
                     <div className="card-body">
                        <h3>Hong Kong</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem provident distinctio soluta iure culpa doloremque quidem, blanditiis doloribus ab ea?</p>
                        <button className="btn btn-sm btn-dark">Read More</button>
                     </div>
                  </div>
               </div>
               <div className="col-md-3">
                  <div className="card shadow">
                     <img src={image4} alt="" />
                     <div className="card-body">
                        <h3>New Zealand</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem provident distinctio soluta iure culpa doloremque quidem, blanditiis doloribus ab ea?</p>
                        <button className="btn btn-sm btn-dark">Read More</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}

export default CountryCard