import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../data/products'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
  const { itemId } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    getProductById(itemId)
      .then((res) => {
        if (mounted) setItem(res)
      })
      .finally(() => mounted && setLoading(false))

    return () => {
      mounted = false
    }
  }, [itemId])

  return (
    <div className="item-detail-container">
      {loading && <p>Cargando detalle...</p>}
      {!loading && !item && <p>Producto no encontrado.</p>}
      {!loading && item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer
