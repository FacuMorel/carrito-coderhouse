import { Link } from 'react-router-dom'
import './ItemListContainer.css'

function ItemList({ products }) {
  if (!products?.length) {
    return <p>No hay productos para mostrar.</p>
  }

  return (
    <div className="item-list">
      {products.map((product) => (
        <article key={product.id} className="item-card">
          <img src={product.image} alt={product.title || product.name} />
          <h3>{product.title || product.name}</h3>
          <p className="price">${product.price}</p>
          <p className="subtitle">{product.category}</p>
          <Link to={`/item/${product.id}`} className="details-link">
            Ver detalle
          </Link>
        </article>
      ))}
    </div>
  )
}

export default ItemList
