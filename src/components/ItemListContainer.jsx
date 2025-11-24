import './ItemListContainer.css'
import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../data/products'
import ItemList from './ItemList'

function formatCategoryLabel(categoryId) {
  return categoryId?.charAt(0).toUpperCase() + categoryId?.slice(1)
}

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const title = useMemo(() => {
    if (categoryId) return `Categoría: ${formatCategoryLabel(categoryId)}`
    return greeting ?? 'Nuestro catálogo'
  }, [categoryId, greeting])

  useEffect(() => {
    let active = true
    setLoading(true)
    getProducts()
      .then((data) => {
        if (!active) return
        const filtered = categoryId ? data.filter((prod) => prod.category === categoryId) : data
        setItems(filtered)
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [categoryId])

  return (
    <div className="item-list-container">
      <div className="container-content">
        <h1 className="welcome-message">{title}</h1>
        {loading ? <p>Cargando productos...</p> : <ItemList products={items} />}
      </div>
    </div>
  )
}

export default ItemListContainer



