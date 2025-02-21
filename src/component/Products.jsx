import React, { useEffect } from 'react';
import { Card } from "flowbite-react";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/Product';
import {Link} from "react-router-dom"
const Products = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log(products);

  return (

<div>
  {
    loading?(
      <h1>loading</h1>
    ):error?(
      <h1>Error: {error}</h1>
    ):(
      <>
      
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
  {
    products && products.length > 0 ? (
      products.map((product) => (
        <Card
          key={product.id}
          className="max-w-sm"
          imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
          imgSrc={product.image}
        >
          <Link to={`/products/${product._id}`}>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h5>
          </Link>
          <div className="mb-5 mt-2.5 flex items-center justify-between">
            <div className="flex items-center">
              {/* Star icons */}
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="h-5 w-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
              <span className="ml-3 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                {product.rating || "5.0"}
              </span>
            </div>
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${product.price || "599"}
            </span>
          </div>
        </Card>
      ))
    ) : (
      <p>No products available.</p>
    )
  }
</div>
   
      </>
    )
  }
</div>

  

 



  


  ); 
};

export default Products;
