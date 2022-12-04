

const ItemDetail = ({ productSelected }) => {
  return (
    <div>
        <h1>{productSelected.id}</h1>
        <h1>{productSelected.title}</h1>
        <h1>{productSelected.category}</h1>
    </div>
  )
}

export default ItemDetail