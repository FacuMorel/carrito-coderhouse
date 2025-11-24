import { useState } from 'react'

function ItemCount({ initial = 1, stock = 10, onAdd }) {
  const [quantity, setQuantity] = useState(initial)

  function increment() {
    setQuantity((prev) => (prev < stock ? prev + 1 : prev))
  }

  function decrement() {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev))
  }

  function handleAdd() {
    if (stock === 0) return
    onAdd?.(quantity)
  }

  return (
    <div className="item-count">
      <div className="item-count-control">
        <button onClick={decrement} disabled={quantity === 1}>
          -
        </button>
        <span className="item-count-value">{quantity}</span>
        <button onClick={increment} disabled={quantity === stock}>
          +
        </button>
      </div>
      <button className="add-to-cart" onClick={handleAdd} disabled={stock === 0}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount

