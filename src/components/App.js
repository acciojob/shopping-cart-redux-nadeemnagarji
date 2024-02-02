
import React from "react";
import './../styles/App.css';
import { CartProvider, useCart } from "./context/Cartcontext";
import Display from "./Display";
import Cart from "./Cart";
import WishList from "./WishList";



const App = () => {



  return (
    
    <CartProvider>
    <div className="app">
      <Display />
      <div className="right-main-div">
      <Cart />
      <WishList />
      </div>
        {/* Do not remove the main div */}
    </div>
    </CartProvider>

  )


}

export default App
