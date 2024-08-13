import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>only on bestsellers product</p>
        <button>Check now</button>
        </div>
    <div className="offers-right">

    </div>
     <img src={exclusive_image} alt="" />
    </div>
  )
}
