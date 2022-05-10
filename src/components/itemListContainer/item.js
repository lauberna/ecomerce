import ItemCount from "./itemCount";
import '../itemListContainer/item.css'
import itemImg from '../../images/bici.jpg'

export default function Item({price, name}) {
    return (
        <div className="item">
            <img className="item__img" src={itemImg} alt="" />
            <div className="item__filter"></div>
            <div className='item__info'>
                <h3 className="item__title">{name}</h3>
                <p className='item__price'>{`precio $${price}`}</p>
                <ItemCount initial={1} stock={23} onAdd={(cantidad)=>alert(`${cantidad} unidades agregadas`)}/>
            </div>
        </div>
    );
}