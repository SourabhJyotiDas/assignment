import React, {  useState } from 'react';
import Sidebar from "./Sidebar.js";
import data from "../data/data.json"

export default function Homepage() {

   const [productId, setProductId] = useState(3);

   return (
      <>
         <div className='flex items-center p-10 justify-around'>

            <select className=' cursor-pointer p-3 border border-black' name="sort" id="sort" onClick={(e) => { setProductId(e.target.value) }}>
               <option className='cursor-pointer' value="">List of Items</option>
               {data && data.data.map((ele) => (
                  <option className='cursor-pointer' key={ele.id} value={ele.id} >{ele.Name}</option>
               ))}
            </select>

            <Sidebar productId={productId} data={data.data}/>

         </div>

      </>

   )
}
