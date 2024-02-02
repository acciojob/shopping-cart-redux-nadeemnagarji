import React, { useEffect, useState } from 'react';
import { useCart } from './context/Cartcontext';
import Card from './Card';


export default function Display() {

    const [item,setItem] = useState(null)
    const cart = useCart()

    const fetchProducts = async()=>{
        try {
            const res =  await fetch("https://dummyjson.com/products")
            const data = await res.json()
          console.log(data.products);
          setItem(data.products)
            
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=>{
        fetchProducts()
    },[])


    return(
        <div className='display'>   
            
            {item && item.map((item,index)=>{
             return <Card key={index} title={item.title} 
              price={item.price}  
            imageUrl={item.images[0]}
            />
            })}
        </div>
    )
};
