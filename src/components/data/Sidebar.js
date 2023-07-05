import React, { useEffect, useState } from 'react';

export default function Sidebar({ productId, data }) {

   const [product, setProduct] = useState("")

   const updateSidebar = (productId) => {
      const output = data && data.find((ele) => ele.id === Number(productId))
      setProduct(output)
   }

   useEffect(() => {
      // eslint-disable-next-line
      updateSidebar(productId)
      // eslint-disable-next-line
   }, [productId])

   return (
      <div className='flex flex-col justify-center items-center'>
         <h1 className='text-7xl font-bold capitalize text-gray-400'>card</h1>
         {
            product && <div className='flex flex-col justify-center items-center space-y-5 border border-black p-10'>
               <h3 className='text-3xl font-medium'>{product.Name}</h3>
               <h3 className='text-sm text-gray-600'>Price : Rs. {product.Price}</h3>
               <h3 className='text-lg'>Item Id : {product.id}</h3>
            </div>
         }
      </div>
   )
}
