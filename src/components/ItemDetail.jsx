import './ItemListContainer.css'
import ItemCount from './ItemCount'

function ItemDetail({ item }) {
  function handleAdd(quantity) {
    // placeholder: later integrate cart context/handler
    alert(`Se agregarán ${quantity} unidades de: ${item.title || item.name}`)
  }

  return (
    <div className="item-detail">
      <img src={item.image} alt={item.title || item.name} className="detail-image" />
      <div className="detail-info">
        <h2>{item.title || item.name}</h2>
        <p className="price">${item.price}</p>
        <p>{item.description || 'Sin descripción disponible.'}</p>
        <p className="subtitle">Categoría: {item.category}</p>
        <ItemCount stock={item.stock ?? 10} onAdd={handleAdd} />
      </div>
    </div>
  )
}

export default ItemDetail
