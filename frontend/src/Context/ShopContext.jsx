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
  // console.log(cart)
  return cart;
  }

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart)
  // const [cartTotal, setCartTotal] = useState(getCartTotal)

  // console.log(cartItems)

  const addToCart=(itemId, itemPrice)=>{
setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
// setCartTotal((total)=>({...total,[itemPrice]: total+itemPrice}))
console.log(cartItems)
  }

  const removeFromCart=(itemId,itemPrice)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    // setCartTotal((total)=>({...total,[itemPrice]: total-itemPrice}))
      }


  const getCartTotal=()=>{
      let subtotal=0;
        for(const item in cartItems){
          if(cartItems[item]>0){
            let itemInfo= all_product.find((product)=>product.id===Number(item))
            subtotal+= cartItems[item] * itemInfo.new_price;
          }
        }
          return subtotal;
      }

  const getTotalCartItems=()=>{
    let totalItem=0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        totalItem+= cartItems[item];
      }
    }
      return totalItem;
  }

  const contextValue = {getCartTotal,getTotalCartItems, all_product,cartItems,addToCart,removeFromCart};
   // console.log(contextValue);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  ) 
}

export default ShopContextProvider;