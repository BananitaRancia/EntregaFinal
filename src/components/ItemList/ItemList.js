import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return products.map((product) => <Item key={product.id} producto={product}></Item>)  
};

export default ItemList;