import React from 'react';
import { useCart } from './context/Cartcontext';
import { useNavigate } from 'react-router';

export default function Cart() {
  
    const {items} = useCart()

    
    return(
        <div className='cart'>

            <h3>Cart Items</h3>
            <div>
                <p>Total Items: {items?items.length:null}</p>
                <p>Total Price:{items&&items.length>0&& items
                .map(item=>item.price)
                .reduce((acc,item)=> acc+ item)
                }</p>
            </div>
            
        </div>
    )
};
