import React, { createContext, useContext, useState } from 'react';


export const CartContext = createContext()




export const CartProvider = ({children})=>{

    const [items,setItems] = useState([])
    const [WishList,setWishList] = useState([])

    return(
        <CartContext.Provider value={{items,setItems,WishList,setWishList}}>
            {children}
        </CartContext.Provider>
    )

    }

    export const  useCart = ()=>{
        return useContext(CartContext)
    }