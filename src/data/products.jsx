import comboImg from '../assets/combo.jpg'
import monitorImg from '../assets/monitor.jpg'
import mouseImg from '../assets/mouse.jpg'
import notebookImg from '../assets/notebook.webp'
import tecladoImg from '../assets/teclado.jpg'

const products = [
  {
    id: 1,
    name: 'Notebook Gamer',
    category: 'electronica',
    price: 800000,
    stock: 6,
    description: 'Notebook de alto rendimiento con 16GB RAM y RTX 4060.',
    image: notebookImg,
  },
  {
    id: 2,
    name: 'Mouse Inalámbrico',
    category: 'accesorios',
    price: 15000,
    stock: 15,
    description: 'Mouse ergonómico con sensor óptico y batería recargable.',
    image: mouseImg,
  },
  {
    id: 3,
    name: 'Teclado Mecánico',
    category: 'accesorios',
    price: 20000,
    stock: 12,
    description: 'Teclado con switches rojos y retroiluminación RGB.',
    image: tecladoImg,
  },
  {
    id: 4,
    name: 'Monitor 27"',
    category: 'electronica',
    price: 120000,
    stock: 4,
    description: 'Monitor IPS QHD con 165Hz y compatibilidad G-Sync.',
    image: monitorImg,
  },
  {
    id: 5,
    name: 'Combo Streaming',
    category: 'kits',
    price: 95000,
    stock: 8,
    description: 'Pack con micrófono, brazo articulado y auriculares.',
    image: comboImg,
  },
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 800)
  })
}

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.find((p) => p.id === Number(id))), 800)
  })
}

export default products
