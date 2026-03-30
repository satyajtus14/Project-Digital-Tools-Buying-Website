import React, { useState } from 'react';
import { VscCheck } from "react-icons/vsc";
import { toast } from 'react-toastify';


const ModelCard = ({model,carts,setCarts}) => {
 
    // This State need for active "Buy Now" button
    const [isBuyNow, setIsBuyNow]= useState(false)
    
    const handleBuyNow =()=>{
        setIsBuyNow(true);
        toast.success('Item Added To Cart');

      const isFoundItem = carts.find(item => item.id === model.id)
        
        if(isFoundItem){
            toast.error('Item already in cart')
            return;
        }
            
        setCarts([...carts,model])
        toast.success(`Wow Your ${model.title} item added!`);

    }
    

    return (
        <div>
         <div key={model.id} className='relative shadow-lg rounded-lg border overflow-hidden border-zinc-300' >
          <div>
          <label
          className={`absolute top-0 right-0 mr-3 rounded-xl border overflow-hidden p-2 mt-2 ${
          model.tagType === "Popular"
          ? "bg-amber-300 text-amber-700"
         : model.tagType === "New"
         ? "bg-green-300 text-green-700"
         : model.tagType === "Best Seller"
         ? "bg-blue-300 text-blue-700"
         : "bg-gray-300 text-gray-700"
  }`}
>
  {model.tagType}
</label>
        </div> 
        <div className='flex justify-between items-center  p-4 mt-4  bg-white' >
        <img src={model.icon} alt="" className='h-20 w-20 rounded-full  object-contain'/>
        </div>
        <div className='p-4 space-y-3'>
            <h2 className='text-2xl font-bold'>{model.title}</h2>
            <p >{model.description}</p>
            <div className='text-2xl font-bold'>
                ${model.price}/Mo
            </div>
            <div>
            <ul className="mt-2 list-disc list-inside">
            {model.features.map((feature, index) => (
               
            <div key={index} className='flex justify-start items-start gap-2'>
            <span className='text-green-500 text-2xl font-bold'><VscCheck /></span>
            <li className='list-none ' key={index}>{feature} </li>
            </div>

            ))}
          </ul>
            </div>
            <button onClick={handleBuyNow}
            className={`btn w-full text-white rounded-lg mt-5 ${
            isBuyNow ? "bg-green-500" : "bg-[#4f39f6]" }`}>
            {isBuyNow ? "Added to cart" : "Buy Now"} </button>
        </div>
       
    </div>  
        </div>
    );
};

export default ModelCard;