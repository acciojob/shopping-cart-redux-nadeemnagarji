import React, { useEffect, useState } from 'react';
import { useCart } from './context/Cartcontext';


export default function WishList(params) {

    const [product,setProduct] = useState([])
    const cart = useCart()

    const {WishList,setItems} = cart

   useEffect (()=>{
    setProduct([...WishList])
    console.log(product);
   },[WishList])  

const handleCart = (title)=>{
    let toAddItem;
      product.map((item)=> item.title ===title ? toAddItem=item :null)
      setItems(prevItems=>[...prevItems,toAddItem])
   
    // setItems(prevItems=>[...prevItems,item])
}

    return(
        <div className='wishlist'>
            <h5>WishList</h5>
            <div className='item-container-wishlist'>
                {WishList && WishList.length>0 && WishList.map((item,index)=>{

                   return <div key={index} className='items-wishlist'>
                    {/* setProduct([...,{item}]) */}
                   <b> Name:</b> {item.title}
                   <b>Price :</b> {item.price} 
                    <button onClick={()=>handleCart(item.title)}>Add to cart</button>
                   </div>
                }) }
            </div>
        </div>
    )
};



/**
 * 
 * what i did is everytime there is a change in wishlist i keep a eye on it using useeffect so everytime wishlist updatesa
 * i update the products usestate with all the items from the wishlist
 */