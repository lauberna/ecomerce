import React,{ useState } from 'react'

import './Navbar.css'
function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="Navbar">
        <img className="nav-logo" src={'../images/png-transparent-trek-bicycle-corporation-bicycle-shop-electric-bicycle-cycling-cycling-text-bicycle-logo.png'}></img>
        <div className={`nav-items ${isOpen && "open"}`}>
            <a href="/home">Home</a> 
            <a href="/bicicletas">Bicicletas</a> 
            <a href="/indumentaria">Indumentaria</a> 
            <a href="/about-us ">Contacto</a> 
        </div>
        <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
          <div className="bar"></div>
        </div>
    </div>
  )
}

export default NavBar