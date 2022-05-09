import { useState } from 'react';
import '../itemListContainer/item.css'
function ItemCount({stock, initial, onAdd}) {
    const [cantidad, setCantidad] = useState(initial);

    function increase() {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        } else if (cantidad == stock){
          alert(`no hay mas stock, limite ${stock} unidades`)
        }
    }
    function decrease() {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        } else if (cantidad == initial){
          alert(`el minimo es de ${initial} productos`)
        }
    }
    function addToCart() {
        onAdd(cantidad);
    }

    return (
        <div className="itemCount">
            <button className='btn1' onClick={decrease}>-</button>
            <span>{cantidad}</span>
            <button className='btn2' onClick={increase}>+</button>
            <button className='btn3' onClick={addToCart}>agregar</button>
        </div>
    );
}
export default ItemCount