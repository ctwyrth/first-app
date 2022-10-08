import React, { Fragment, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import watch from '../assets/img/640-black-smartwatch.jpg';

const ShoppingCart = () => {
   const [ state, setState ] = useState({
      products: [
         {
            sno: 'AA001',
            image: watch,
            name: 'Mi Watch',
            price: 1500,
            qty: 2
         },
         {
            sno: 'AA002',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.XZxjVPPG9RaBxx2K73Q_vgHaHa%26pid%3DApi&f=1&ipt=f7715120f95add913949b4b514b38d0a34847bbeebdc28c2c01008717755ae29&ipo=images',
            name: 'Samsung Watch',
            price: 1200,
            qty: 2
         },
         {
            sno: 'AA003',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.yCXQorhQm1Spuq1mn7a46gHaHa%26pid%3DApi&f=1&ipt=6eaa7cf5f3656456d99b3a2a1cc973728cdaf9f95f01496702ef791b7083227a&ipo=images',
            name: 'Apple Watch',
            price: 1800,
            qty: 2
         },
         {
            sno: 'AA004',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.iQdzSn_PKbEwBqxCq_cwegHaHa%26pid%3DApi&f=1&ipt=007cbe8f01a6bc7e961a51476f4cc5ccc4fb9f5cba90cf55b2d7afbbdbf6cea0&ipo=images',
            name: 'Oppo Watch',
            price: 1300,
            qty: 2
         },
         {
            sno: 'AA005',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.3EeBCsnGeWtMcyDnOPkUvwHaHa%26pid%3DApi&f=1&ipt=3c1dcbbe4a090418868b4b268a8bd461513dcbfded9b9e015e89a15787dcf7a4&ipo=images',
            name: 'LG Watch',
            price: 1900,
            qty: 2
         },
      ]
   });

   let { products } = state;

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
            qty: state.product.qty - 1 > 0 ? state.product.qty-- : 1
         }
      }));
   }

   return (
      <Fragment>
         <div className="container mt-3">
            <div className="row">
               <div className="col">
                  <p className="h3 text-success">Shopping Cart</p>
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
                        {products.map((product) => {
                           return (
                              <tr>
                                 <td>{product.sno}</td>
                                 <td><img src={product.image} width="50px" alt="non-Apple smart watch" /></td>
                                 <td>{product.name}</td>
                                 <td>${product.price}</td>
                                 <td><FontAwesomeIcon icon={solid('minus-square')} className="me-1" onClick={handleDecrement} />{product.qty}<FontAwesomeIcon icon={solid('plus-square')} className="ms-1" onClick={handleIncrement} /></td>
                                 <td>${product.price * product.qty}</td>
                              </tr>
                           )}
                        )}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </Fragment>
   )
}

export default ShoppingCart;