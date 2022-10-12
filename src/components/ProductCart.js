import React, { Fragment, useState } from 'react';

import watch from '../assets/img/640-black-smartwatch.jpg';

const ProductCart = () => {
   const [ state, setState ] = useState({
      products: [
         {
            sno: 'AA001',
            image: watch,
            name: 'Mi Watch',
            price: 1500,
            qty: 24
         },
         {
            sno: 'AA002',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.XZxjVPPG9RaBxx2K73Q_vgHaHa%26pid%3DApi&f=1&ipt=f7715120f95add913949b4b514b38d0a34847bbeebdc28c2c01008717755ae29&ipo=images',
            name: 'Samsung Watch',
            price: 1200,
            qty: 15
         },
         {
            sno: 'AA003',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.yCXQorhQm1Spuq1mn7a46gHaHa%26pid%3DApi&f=1&ipt=6eaa7cf5f3656456d99b3a2a1cc973728cdaf9f95f01496702ef791b7083227a&ipo=images',
            name: 'Apple Watch',
            price: 1800,
            qty: 3
         },
         {
            sno: 'AA004',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.iQdzSn_PKbEwBqxCq_cwegHaHa%26pid%3DApi&f=1&ipt=007cbe8f01a6bc7e961a51476f4cc5ccc4fb9f5cba90cf55b2d7afbbdbf6cea0&ipo=images',
            name: 'Oppo Watch',
            price: 1300,
            qty: 0
         },
         {
            sno: 'AA005',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.3EeBCsnGeWtMcyDnOPkUvwHaHa%26pid%3DApi&f=1&ipt=3c1dcbbe4a090418868b4b268a8bd461513dcbfded9b9e015e89a15787dcf7a4&ipo=images',
            name: 'LG Watch',
            price: 1900,
            qty: 12
         },
      ]
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