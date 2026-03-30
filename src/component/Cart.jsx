import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({carts,setCarts}) => {

    const totalPrice = carts.reduce((sum,item) => sum + item.price,0)
  
    const handlePayment =() => {
        setCarts([]);
        toast.success(`Payment completed`);
    }

    const handleDelete =(item) => {
     
       const filterCartItem = carts.filter(cartItem => cartItem.id !== item.id)
       setCarts(filterCartItem)
       toast.success(`Your item deleted to cart!`);
    }

    return (
        <div className='p-10 max-w-7xl mx-auto hover:border-2 border-blue-500'>
            <h1 className='text-2xl font-bold '> Your Cart</h1>
            <div className='space-y-5 mt-4'>
                {
                    carts.map(item =>
                        <div key={item.id} className='flex items-center justify-between border rounded-2xl p-3'>

                           <div className='flex items-center gap-3'>

                            <div>
                               <img src={item.icon} className='h-20 w-20 object-contain' />

                            </div>
                            <div>
                                <h2 className='text-xl font-bold'>{item.title}</h2>
                                <p className='text-sm font-bold'>${item.price}/Mo</p>

                            </div>
                            
                            </div> 
                        <div className='flex gap-10'>
                            
                            <button onClick={()=> handleDelete(item)} className='btn rounded-full font-bold text-lg btn-error'>Remove</button>

                        </div>
                        </div>    
                    )
                }
            </div>
            <div className='flex justify-between bg-white text-black p-5 mt-5 rounded-lg font-bold text-lg'>
                <div>Total</div>
                <div className='font-bold text-3xl'>${totalPrice}</div>

            </div>
            <button onClick={handlePayment} className='btn w-full mt-5 bg-gradient-to-t from-[#4f39f6] to-[#9514fa] text-white text-2xl rounded-lg'>Proceed to Checkout</button>
        </div>
    );
};


export default Cart;