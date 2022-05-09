import React, {useState} from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai";
import '../cart/cssCart.css'


function Cart() {

  return (
    <div className="CartWidget" >
        <div className="cont">0</div>
        <a href="/cart"><AiOutlineShoppingCart className="cart"/></a>
        
    </div>
  )
}

export default Cart