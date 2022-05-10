import { useEffect, useState } from "react";
import ItemList from './ItemList'
import '../itemListContainer/ItemListContainer.css'

const products = [
  {id: "01", categoria: "bicicletas", name: "Trek Session 8 Dh", price: 310000, img: ''},
  {id: "02", categoria: "indumentaria", name: "Pantalon Troy Lee", price: 12400, img: ""},
  {id: "03", categoria: "bicicleta", name: "Trek Slash Enduro", price: 237000, img: ""}
];

const getFetch = new Promise ((resolve) => {
  setTimeout(() => {
      resolve(products);
  }, 2000);
})

export default function ItemListContainer({greeting}) {
  const [items,setItems] = useState([]);
  const [loader,setLoader] = useState(true);


  useEffect(() => {
      getFetch
      .then(res => setItems(res))
      .catch(err => console.log(err))
      .finally(() => setLoader(false))
  },[]);

  return (
      <div className="container">
          <h1 className="itemListContainer__title">{greeting}</h1>
          {loader? <h2>Cargando...</h2>: <ItemList items={items} />}
      </div>
  );
}