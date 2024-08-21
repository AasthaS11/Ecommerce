// import React, { createContext } from "react";
// import all_product from "../Components/Assets/all_product.js";

// export const ShopContext = createContext(null);

// const ShopContextProvider = (props) => {
//   const contextValue = { all_product };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   )
// }

// export default ShopContextProvider;


import React, {createContext, useState} from "react";
import all_product from "../Components/Assets/all_product.js";

export const ShopContext = createContext(null);
const getDefaultCart=()=>{
  let cart={};
  for(let index=0; index<all_product.length; index++){
    cart[index]=0;
  }
  return cart;
  }

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart)

  // console.log(cartItems)

  const addToCart=(itemId)=>{
setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
console.log(cartItems)
  }

  const removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
      }

  const contextValue = {all_product,cartItems,addToCart,removeFromCart};
   // console.log(contextValue);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  ) 
}

export default ShopContextProvider;