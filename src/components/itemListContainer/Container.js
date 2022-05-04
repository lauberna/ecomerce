import React from 'react'
import '../itemListContainer/ContainerCss.css'
function Container({saludo='saludo'}) {
  return (
    <div className='Container'>
        <div>{saludo}</div>
        <button onClick={()=> alert('hola')}>click me</button>
    </div>
  )
}

export default Container