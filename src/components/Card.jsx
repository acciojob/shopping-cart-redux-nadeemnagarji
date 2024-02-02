import React from 'react';
import { useCart } from './context/Cartcontext';


export default function Card({title,imageUrl,description,price}) {

    const cart = useCart()
    const sendToCart = ()=>{
             cart.setItems(items=>[...items,{title,imageUrl,price}])   
             console.log(cart.items);
    }

const sendToWishList = ()=>{
      cart.setWishList(items=>[...items,{items,title,imageUrl,price}])
}
    return(
        <div className='Card'>
            <img src={imageUrl} alt={title} />
            <div>
               <h5>{title}</h5>
               <p>{price}</p>
            </div>
            <div>

            <button onClick={sendToCart} >Add to cart</button>
            <button onClick={sendToWishList}>Add to wishlist</button>
            </div>
        </div>
    )
};
