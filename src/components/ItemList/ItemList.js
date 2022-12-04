import Item from "../Item/Item";

// const ItemList = ({productList}) => {
//   return (<>{productList.map((product) => (<Item key={product.id} producto={product}></Item>
//       ))}
//     </>
//   );
// };

const ItemList = ({ products }) => {
  return products.map((product) => <Item key={product.id} producto={product} />);
};
  

export default ItemList;