import ItemCount from "./itemCount";
import '../itemListContainer/item.css'

export default function Item() {

    return (
        <div className="item">
            <div className='item__info'>
                <h3 className="item__title">bicicleta</h3>
                <p className='item__price'>110000$</p>
                <ItemCount initial={1} stock={23} onAdd={(cantidad)=>console.log(`${cantidad} unidades agregadas`)}/>
            </div>
        </div>
    );
}