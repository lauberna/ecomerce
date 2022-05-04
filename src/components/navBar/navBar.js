import React,{ useState } from 'react'
import '../navBar/Navbar.css'
import {GiMountains} from 'react-icons/gi'

import Cart from '../cart/Cart.js'




function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <div className="Navbar">
        <GiMountains className="nav-logo" />
        <div className={`nav-items ${isOpen && "open"}`}>
            <a href="/home">Home</a> 
            <a href="/bicicletas">Bicicletas</a> 
            <a href="/indumentaria">Indumentaria</a> 
            
        </div>
        <div>
          <Cart/>
        </div>
        <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
          <div className="bar"></div>
        </div>
    </div>
    
    </>
  )
}

export default NavBar