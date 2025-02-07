import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCartAction ,addToCartAction }from '../redux/actions/cartItems'
const CardItem = ({cartItems}) => {
const dispatch=useDispatch()
const removefromCartHandler=(id)=>{
  dispatch( removeFromCartAction(id))
}
const addtoCartHandler=(id,qty)=>{
  dispatch(addToCartAction(id,qty) )
}

    
  return (
    <div>
          <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {cartItems.map((product) => (
                          <li key={product.id} className="flex py-6">
                            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                alt={product.name}
                                src={product.image}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href="#">{product.name}</a>
                                  </h3>
                                  <p className="ml-4">{product.price}</p>
                                </div>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">Qty {product.qty}</p>
                                <select
              value={product.qty}
              onChange={(e)=>addtoCartHandler(product.product,Number(e.target.value))}
              className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
              {
                [...Array(product.countInStock).keys()].map((x)=>(
                  <option key={x+1} value={x+1}>{x+1}</option>
                ))
              }
                  </select>
                                <div className="flex">
                                  <button type="button" 
                                  onClick={()=>removefromCartHandler(product.product)}
                                  className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
    </div>
  )
}

export default CardItem