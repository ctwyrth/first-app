import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const ProductItem = () => {
   const [state, setState] = useState({
      product: {
         sno: 'AA001',
         image: 'http://cdn.shopify.com/s/files/1/0262/8855/4033/products/tranyago-smartwatch-tranya-1_1200x1200.jpg?v=1648093721',
         name: 'Mi Watch',
         price: 1500,
         qty: 2
      }
   })

   const { product } = state;

   const handleIncrement = () => {
      setState((state) => ({
         product: {
            ...state.product,
            qty: state.product.qty++
         }
      }));
   }

   const handleDecrement = () => {
      setState((state) => ({
         product: {
            ...state.product,
            qty: state.product.qty--
         }
      }));
   }

   return (
      <React.Fragment>
         <div className="container mt-3">
            <div className="row">
               <div className="col">
                  <p className="h3 text-success">Product Item</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui praesentium ea ullam quos nisi sapiente labore facilis possimus est sunt fugiat consectetur, ipsam eveniet dolores voluptatem, rem, quidem sit architecto?</p>
               </div>
            </div>
         </div>
         <div className="container mt-3">
            <div className="row">
               <div className="col">
                  <table className="table table-striped text-center table-hover">
                     <thead className="bg-dark text-white">
                        <tr>
                           <th>SNO</th>
                           <th>Image</th>
                           <th>Name</th>
                           <th>Price</th>
                           <th>Qty</th>
                           <th>Total</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>{product.sno}</td>
                           <td><img src={product.image} width="50px" alt="non-Apple smart watch" /></td>
                           <td>{product.name}</td>
                           <td>${product.price}</td>
                           <td><FontAwesomeIcon icon={solid('minus-square')} className="me-1" onClick={handleDecrement} />{product.qty}<FontAwesomeIcon icon={solid('plus-square')} className="ms-1" onClick={handleIncrement} /></td>
                           <td>${product.price * product.qty}</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}

export default ProductItem