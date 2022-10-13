import React, { Fragment, useState } from 'react';

import watch from '../assets/img/640-black-smartwatch.jpg';
import ProductService from '../services/ProductService';

const ProductCart = () => {
   const [ state, setState ] = useState({
      products: ProductService.getAllProducts()
   });

   let { products } = state;

   return (
      <Fragment>
         <div className="container mt-4">
            <div className="row">
               <div className="col">
                  <p className="h3 text-success">Product Cart</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odio saepe perspiciatis similique quidem perferendis quam quas maxime eius error alias veritatis dignissimos, aliquid accusamus, aliquam enim impedit, doloribus magni.</p>
               </div>
            </div>
         </div>
         <div className="container mt-3">
            <div className="row">
               <div className="col-md-8">
                  {products.map((product) => {
                     return (
                        <div className="card shadow my-4" key={product.sno}>
                           <div className="card-body">
                              <div className="row align-items-center">
                                 <div className="col-md-4">
                                    <img src={product.image} alt={product.name} className="img-fluid" />
                                 </div>
                                 <div className="col-md-6 py-4 px-2">
                                    <h5 className="display-5">{product.name}</h5>
                                    <h6 className="ms-2">${product.price.toFixed(2)}</h6>
                                    <h6 className="ms-2">
                                       {
                                          product.qty >= 10 && <span className="text-success">Available</span>
                                       }
                                       {
                                          product.qty <= 10 && product.qty >= 1 && <span className="text-warning">Almost out of stock</span>
                                       }
                                       {
                                          product.qty === 0 && <span className="text-danger">Out of stock</span>
                                       }
                                    </h6>
                                 </div>
                              </div>
                           </div>
                        </div>
                     );
                  })
                  }
               </div>
            </div>
         </div>
      </Fragment>
   )
}

export default ProductCart;