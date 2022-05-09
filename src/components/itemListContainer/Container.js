
import Item from './item'
import '../itemListContainer/ContainerCss.css'

function Container({saludo='saludo'}) {
  return (
    <div className='Container'>
        <div>{saludo}</div>
        <Item/>
    </div>
  )
}

export default Container