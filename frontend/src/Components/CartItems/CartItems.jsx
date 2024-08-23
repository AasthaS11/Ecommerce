import React, { useContext } from 'react'
import "./CartItems.css"
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from "../Assets/cart_cross_icon.png"

export const CartItems = () => {
  const {all_product, cartItems, addToCart, removeFromCart, getCartTotal}=useContext(ShopContext)
  // let count=0;
  return (
    <div className='cartitems'>
      <div className="cartitem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return <div>
                <div className='cartitems-format cartitem-format-main'>
                  <img src={e.image} alt="" className='carticon-product-icon'/>
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>

                {/* have to add + and - icons on the either side of quantity and the cross icon for the removal of complete item */}
                  <button className='cartitems-quantity' onClick={()=>{addToCart(e.id, e.new_price)}}>{cartItems[e.id]}</button>
                  <p>${e.new_price*cartItems[e.id]}</p>
                  {/* <p>{count}</p> */}
                  <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id, e.new_price)}} alt="" />
                </div>
                <hr/>
                </div>

            }
            return null;
          })}
          
            <div className="cartitems-down">
              <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                  <div className="cartitems-total-item">
                    <p>subtotal</p>
                    <p>${getCartTotal()}</p>
                    {/* <button className='cart-subtotal' onClick={()=>{getCartTotal}}>Get total</button> */}
                  </div>
                  <hr />
                  <div className="cartitems-total-item">
                    <p>Shipping fee</p>
                    <p>Free</p>
                  </div>
                  <hr />
                  <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getCartTotal()}</h3>
                  </div>
                </div>
                <button>Proceed to checkout</button>
              </div>
              <div className="cartitems-promocode">
                <p>If you have a promocode, enter it here</p>
                <div className="promocode-promobox">
                  <input type="text" placeholder='promo-code' />
                  <button>Submit</button>
                </div>
              </div>
            </div>
        </div>
  )
}


